// Erwin Lejeune - 2026-10-01

import { useEffect, useState } from "react";

const CACHE_KEY = "github-stars-v1";
/** Cached counts younger than this are used without asking GitHub again. */
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

interface CacheEntry {
  stars: number;
  fetchedAt: number;
}

type StarCache = Record<string, CacheEntry>;

/** Extract `owner/repo` from a GitHub repository URL, or null for any other URL. */
export function toRepoSlug(url: string): string | null {
  const match = url.match(/^https?:\/\/github\.com\/([^/\s]+)\/([^/\s#?]+)/i);
  return match ? `${match[1]}/${match[2].replace(/\.git$/, "")}`.toLowerCase() : null;
}

/** Compact star count: 950, 1.2k, 12k. */
export function formatStars(stars: number): string {
  if (stars < 1000) return String(stars);
  const thousands = stars / 1000;
  return `${thousands < 10 ? thousands.toFixed(1).replace(/\.0$/, "") : Math.round(thousands)}k`;
}

// Storage can be missing or throw (private mode, blocked site data), so every access is guarded.
function readCache(): StarCache {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as StarCache) : {};
  } catch {
    return {};
  }
}

function writeCache(cache: StarCache): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Caching is best-effort.
  }
}

async function fetchStars(slug: string): Promise<number | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${slug}`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { stargazers_count?: unknown };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

/**
 * Star counts keyed by `owner/repo`. Cached counts render immediately; stale or missing
 * ones are fetched from the GitHub API. A failed fetch keeps the last cached value, and a
 * repo with no value at all is simply absent from the result.
 */
export function useGithubStars(repoUrls: string[]): Record<string, number> {
  const slugs = [...new Set(repoUrls.map(toRepoSlug).filter((s): s is string => s !== null))];
  const slugKey = slugs.join(",");

  const [stars, setStars] = useState<Record<string, number>>(() => {
    const cache = readCache();
    return Object.fromEntries(
      slugs.filter((slug) => cache[slug]).map((slug) => [slug, cache[slug].stars]),
    );
  });

  useEffect(() => {
    let cancelled = false;
    const cache = readCache();
    const now = Date.now();
    const stale = slugKey
      .split(",")
      .filter((slug) => slug && (!cache[slug] || now - cache[slug].fetchedAt > CACHE_TTL_MS));
    if (stale.length === 0) return;

    void Promise.all(stale.map(async (slug) => [slug, await fetchStars(slug)] as const)).then(
      (results) => {
        if (cancelled) return;
        const fresh = readCache();
        const updates: Record<string, number> = {};
        for (const [slug, count] of results) {
          if (count === null) continue;
          fresh[slug] = { stars: count, fetchedAt: now };
          updates[slug] = count;
        }
        if (Object.keys(updates).length === 0) return;
        writeCache(fresh);
        setStars((prev) => ({ ...prev, ...updates }));
      },
    );

    return () => {
      cancelled = true;
    };
  }, [slugKey]);

  return stars;
}
