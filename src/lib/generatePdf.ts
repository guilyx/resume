// Erwin Lejeune - 2026-02-16

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;

/**
 * Capture an HTML element and save it as an A4 PDF.
 *
 * Libraries (`html2canvas`, `jsPDF`) are loaded lazily on first call
 * so they never bloat the initial page bundle.
 *
 * @param element  The DOM node to capture (typically `.page`).
 * @param filename The download filename (e.g. "jane-smith-resume.pdf").
 */
export async function generateResumePdf(
  element: HTMLElement,
  filename: string,
): Promise<void> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const scaledHeight = (canvas.height * A4_WIDTH_MM) / canvas.width;
  const imgData = canvas.toDataURL("image/png");
  let yOffset = 0;
  let pageIndex = 0;

  while (yOffset < scaledHeight) {
    if (pageIndex > 0) pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, -yOffset, A4_WIDTH_MM, scaledHeight);
    yOffset += A4_HEIGHT_MM;
    pageIndex++;
  }

  pdf.save(filename);
}

/**
 * Derive a kebab-cased PDF filename from a person's name.
 *
 * @example toResumeFilename("Jane Smith") → "jane-smith-resume.pdf"
 */
export function toResumeFilename(name: string): string {
  return `${name.toLowerCase().replace(/\s+/g, "-")}-resume.pdf`;
}
