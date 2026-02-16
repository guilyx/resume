// Erwin Lejeune - 2026-02-16

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;

/**
 * Returns true if the node is a same-origin element (or not an image).
 * Cross-origin `<img>` tags (e.g. Google favicon API) are filtered out
 * because `html-to-image` cannot fetch them due to CORS restrictions.
 */
function isSameOriginNode(node: Node): boolean {
  if (!(node instanceof HTMLImageElement)) return true;
  try {
    return new URL(node.src, window.location.origin).origin === window.location.origin;
  } catch {
    return true; // relative URLs are local
  }
}

/**
 * Capture an HTML element and save it as an A4 PDF.
 *
 * Uses `html-to-image` (SVG foreignObject) so the browser's own
 * rendering engine handles modern CSS (Tailwind v4 `oklab()`, etc.).
 * Fonts are self-hosted via `@fontsource/inter` to avoid CORS issues.
 *
 * Libraries are loaded lazily on first call so they never bloat the
 * initial page bundle.
 *
 * @param element  The DOM node to capture (typically `.page`).
 * @param filename The download filename (e.g. "erwin-lejeune-resume.pdf").
 */
export async function generateResumePdf(
  element: HTMLElement,
  filename: string,
): Promise<void> {
  const [htmlToImage, { jsPDF }] = await Promise.all([
    import("html-to-image"),
    import("jspdf"),
  ]);

  await document.fonts.ready;

  const pixelRatio = 2;
  const dataUrl = await htmlToImage.toPng(element, {
    pixelRatio,
    cacheBust: true,
    filter: isSameOriginNode,
  });

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Determine how the captured image maps onto A4 pages.
  const imgWidthPx = element.scrollWidth * pixelRatio;
  const imgHeightPx = element.scrollHeight * pixelRatio;
  const scaledHeight = (imgHeightPx * A4_WIDTH_MM) / imgWidthPx;

  let yOffset = 0;
  let pageIndex = 0;

  while (yOffset < scaledHeight) {
    if (pageIndex > 0) pdf.addPage();
    pdf.addImage(dataUrl, "PNG", 0, -yOffset, A4_WIDTH_MM, scaledHeight);
    yOffset += A4_HEIGHT_MM;
    pageIndex++;
  }

  // Trigger download via Blob URL + anchor for maximum compatibility.
  const blob = pdf.output("blob");
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();

  requestAnimationFrame(() => {
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  });
}

/**
 * Derive a kebab-cased PDF filename from a person's name.
 *
 * @example toResumeFilename("Erwin Lejeune") → "erwin-lejeune-resume.pdf"
 */
export function toResumeFilename(name: string): string {
  return `${name.toLowerCase().replace(/\s+/g, "-")}-resume.pdf`;
}
