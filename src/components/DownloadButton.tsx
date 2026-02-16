// Erwin Lejeune - 2026-02-16

import { Download } from "lucide-react";

interface DownloadButtonProps {
  /** URL or path to the PDF file (e.g. "/resume.pdf"). */
  pdfUrl: string;
  /** File name used when the browser saves the download. */
  filename?: string;
}

/**
 * Fixed floating button that links directly to a PDF.
 *
 * - Renders in the bottom-right corner on desktop, bottom-center on mobile.
 * - Hidden when printing (`print:hidden`).
 * - The `href` is a plain link — anyone can use it externally to download
 *   the resume (e.g. `https://yoursite.com/resume.pdf`).
 */
export function DownloadButton({ pdfUrl, filename = "resume.pdf" }: DownloadButtonProps) {
  return (
    <a
      href={pdfUrl}
      download={filename}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl active:scale-95 print:hidden"
      aria-label="Download resume as PDF"
    >
      <Download size={16} className="shrink-0" />
      <span className="hidden sm:inline">Download PDF</span>
    </a>
  );
}
