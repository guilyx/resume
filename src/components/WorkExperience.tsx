// Erwin Lejeune - 2026-02-15

import type { Experience } from "../types/resume";
import { Section } from "./Section";

interface WorkExperienceProps {
  experience: Experience[];
}

/** Renders a single job entry. */
function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="text-sm font-semibold text-primary">
          {entry.role}
        </h3>
        <span className="text-xs text-muted whitespace-nowrap">
          {entry.period}
        </span>
      </div>

      <p className="text-xs text-muted mt-0.5">
        {entry.company}
        {entry.location ? `, ${entry.location}` : ""}
      </p>

      {entry.promotions && (
        <p className="text-xs italic text-accent/80 mt-1">
          {entry.promotions}
        </p>
      )}

      <ul className="mt-2 space-y-1">
        {entry.bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="text-sm leading-relaxed text-primary/85 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
          >
            {bullet.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Work experience section listing all positions in chronological order. */
export function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <Section title="Work Experience">
      {experience.map((entry, idx) => (
        <ExperienceEntry key={idx} entry={entry} />
      ))}
    </Section>
  );
}
