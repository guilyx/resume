// Erwin Lejeune - 2026-02-15

import { useEffect, useRef } from "react";
import { resumeData } from "./data/resume";
import {
  DownloadButton,
  Header,
  ProfessionalSummary,
  WorkExperience,
  Publications,
  EducationSection,
  Skills,
} from "./components";
import { generateResumePdf, toResumeFilename } from "./lib/generatePdf";

/**
 * Single-page resume application.
 *
 * The layout mirrors a traditional CV:
 *  - A two-column grid on desktop (main content left, sidebar right).
 *  - Stacked single column on mobile / print.
 *
 * Append `?download` to the URL to auto-generate and download the PDF
 * (e.g. `https://yoursite.com/?download`).
 */
export default function App() {
  const { name, title, summary, contact, experience, education, publications, skills } =
    resumeData;

  const hasAutoDownloaded = useRef(false);

  useEffect(() => {
    if (hasAutoDownloaded.current) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.has("download")) return;

    hasAutoDownloaded.current = true;

    // Short delay so fonts and images finish loading before capture.
    const timer = setTimeout(async () => {
      const page = document.querySelector(".page") as HTMLElement | null;
      if (!page) return;
      await generateResumePdf(page, toResumeFilename(name));
    }, 1500);

    return () => clearTimeout(timer);
  }, [name]);

  return (
    <>
      <DownloadButton name={name} />
      <div className="page">
        <div className="px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12">
          <Header name={name} title={title} contact={contact} />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_312px] gap-x-10 gap-y-2">
            {/* ---- Main column ---- */}
            <div>
              <ProfessionalSummary summary={summary} />
              <WorkExperience experience={experience} />
            </div>

            {/* ---- Sidebar ---- */}
            <aside>
              <Skills skills={skills} />
              <EducationSection education={education} />
              <Publications publications={publications} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
