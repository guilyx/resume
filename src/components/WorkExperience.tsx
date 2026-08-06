// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";
import type { Experience } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface WorkExperienceProps {
  experience: Experience[];
}

const INLINE_LINK_REGEX = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

/** Render `[label](url)` snippets as clickable links within bullet text. */
function renderBulletText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(INLINE_LINK_REGEX)) {
    const [fullMatch, label, url] = match;
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, matchIndex));
    }

    nodes.push(
      <a
        key={`${url}-${matchIndex}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors underline decoration-accent/40 underline-offset-2"
      >
        {label}
      </a>,
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

/** Renders a single job entry. */
function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <div className="mb-5 print:mb-3 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="text-sm font-semibold text-primary">{entry.role}</h3>
        <span className="text-xs text-muted whitespace-nowrap">{entry.period}</span>
      </div>

      <p className="text-xs text-muted mt-0.5 inline-flex items-center gap-1.5 flex-wrap">
        {entry.companyUrl && <Favicon url={entry.companyUrl} size={13} />}
        {entry.companyUrl ? (
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {entry.company}
          </a>
        ) : (
          <span>{entry.company}</span>
        )}
        {entry.location && <span>, {entry.location}</span>}
      </p>

      {entry.promotions && (
        <p className="text-xs italic text-accent/80 mt-1">{entry.promotions}</p>
      )}

      <ul className="mt-2 print:mt-1.5 space-y-1 print:space-y-0.5">
        {entry.bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="text-sm leading-relaxed text-primary/85 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
          >
            {renderBulletText(bullet.text)}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Work experience section listing all positions in chronological order. */
export function WorkExperience({ experience }: WorkExperienceProps) {
  const visibleEntries = experience.filter((entry) => entry.visible !== false);

  return (
    <Section title="Work Experience">
      {visibleEntries.map((entry, idx) => (
        <ExperienceEntry key={idx} entry={entry} />
      ))}
    </Section>
  );
}
