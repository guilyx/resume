// Erwin Lejeune - 2026-02-15

import { resumeData } from "./data/resume";
import {
  Header,
  ProfessionalSummary,
  WorkExperience,
  Publications,
  EducationSection,
  Skills,
} from "./components";

/**
 * Single-page resume application.
 *
 * The layout mirrors a traditional CV:
 *  - A two-column grid on desktop (main content left, sidebar right).
 *  - Stacked single column on mobile / print.
 */
export default function App() {
  const { name, title, summary, contact, experience, education, publications, skills } =
    resumeData;

  return (
    <div className="page">
      <div className="px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12">
        <Header name={name} title={title} contact={contact} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-x-10 gap-y-2">
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
  );
}
