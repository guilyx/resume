// Erwin Lejeune - 2026-02-15

import { useEffect, useRef } from "react";
import { resumeData } from "./data/resume";
import {
  DownloadButton,
  Header,
  ProfessionalSummary,
  WorkExperience,
  Projects,
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
 * Append `?download` to the URL to auto-open print flow
 * (e.g. `https://yoursite.com/?download`).
 */
export default function App() {
  const {
    name,
    title,
    summary,
    contact,
    experience,
    projects,
    education,
    publications,
    skills,
  } = resumeData;

  const hasAutoDownloaded = useRef(false);

  useEffect(() => {
    if (hasAutoDownloaded.current) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.has("download")) return;

    hasAutoDownloaded.current = true;

    // Short delay so fonts and layout fully settle before print.
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
        <div className="px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 print:px-4 print:py-5">
          <Header name={name} title={title} contact={contact} />

          {/* Print layout is driven by `.resume-columns` in index.css, not by
              `print:` utilities -- see the note there on grid fragmentation. */}
          <div className="resume-columns grid grid-cols-1 md:grid-cols-[1fr_250px] gap-x-10 gap-y-2">
            {/* Sidebar comes first in the DOM so the print layout can float it
                beside the main column; `order` keeps the main column first on
                screen, where the grid is in charge. */}
            <aside className="order-2">
              <Skills skills={skills} />
              <Projects projects={projects} />
              <EducationSection education={education} />
              <Publications publications={publications} />
            </aside>

            {/* ---- Main column ---- */}
            <div className="resume-main order-1">
              <ProfessionalSummary summary={summary} />
              <WorkExperience experience={experience} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
