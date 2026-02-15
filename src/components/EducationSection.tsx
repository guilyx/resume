// Erwin Lejeune - 2026-02-15

import type { Education } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface EducationSectionProps {
  education: Education[];
}

/** Renders academic history entries. */
export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section title="Academic History">
      <div className="space-y-3">
        {education.map((entry, idx) => (
          <div key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-sm font-semibold text-primary">{entry.degree}</h3>
              <span className="text-xs text-muted whitespace-nowrap">{entry.period}</span>
            </div>
            <p className="text-xs text-muted mt-0.5 inline-flex items-center gap-1.5">
              {entry.institutionUrl && <Favicon url={entry.institutionUrl} size={13} />}
              {entry.institutionUrl ? (
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {entry.institution}
                </a>
              ) : (
                entry.institution
              )}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
