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
 * Fetches and displays a website's favicon using Google's public favicon API.
 * Gracefully hides itself if the image fails to load.
 */
export function Favicon({ url, size = 14, className = "" }: FaviconProps) {
  const [hidden, setHidden] = useState(false);

  let domain: string;
  try {
    domain = new URL(url).hostname;
  } catch {
    return null;
  }

  if (hidden) return null;

  const src = `https://www.google.com/s2/favicons?domain=${domain}&sz=${size * 2}`;

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
