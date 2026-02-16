// Erwin Lejeune - 2026-02-16

import { useCallback, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { generateResumePdf, toResumeFilename } from "../lib/generatePdf";

interface DownloadButtonProps {
  /** Full name — used to derive the download filename. */
  name: string;
}

/**
 * Fixed floating button that generates a PDF from the rendered `.page`
 * element and triggers a browser download.
 *
 * - Bottom-right on desktop, icon-only on mobile.
 * - Hidden when printing (`print:hidden`).
 * - Shows a spinner while the PDF is being generated.
 */
export function DownloadButton({ name }: DownloadButtonProps) {
  const [generating, setGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    const page = document.querySelector(".page") as HTMLElement | null;
    if (!page || generating) return;

    setGenerating(true);
    try {
      await generateResumePdf(page, toResumeFilename(name));
    } catch (error) {
      console.error("[DownloadButton] PDF generation failed:", error);
    } finally {
      setGenerating(false);
    }
  }, [name, generating]);

  return (
    <button
      onClick={handleDownload}
      disabled={generating}
      className="fixed bottom-6 right-6 z-50 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl active:scale-95 disabled:cursor-wait disabled:opacity-70 print:hidden"
      aria-label="Download resume as PDF"
    >
      {generating ? (
        <Loader2 size={16} className="shrink-0 animate-spin" />
      ) : (
        <Download size={16} className="shrink-0" />
      )}
      <span className="hidden sm:inline">
        {generating ? "Generating\u2026" : "Download PDF"}
      </span>
    </button>
  );
}
