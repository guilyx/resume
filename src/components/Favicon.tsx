// Erwin Lejeune - 2026-02-15

import { useState } from "react";

interface FaviconProps {
  /** Full URL from which to extract the domain and fetch its favicon. */
  url: string;
  /** Rendered size in pixels (width & height). Defaults to 14. */
  size?: number;
  className?: string;
}

/**
 * Fetches and displays a website's favicon via Google's faviconV2 service using
 * the full page URL (not domain-only). Domain-only lookups often downgrade to
 * `http://` and miss modern sites' icons (e.g. sirb.ai), which then fails `onError`.
 * Gracefully hides itself if the image fails to load.
 */
export function Favicon({ url, size = 14, className = "" }: FaviconProps) {
  const [hidden, setHidden] = useState(false);

  try {
    new URL(url);
  } catch {
    return null;
  }

  if (hidden) return null;

  const pixelSize = size * 2;
  const src = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(url)}&size=${pixelSize}`;

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`inline-block shrink-0 ${className}`}
      onError={() => setHidden(true)}
    />
  );
}
