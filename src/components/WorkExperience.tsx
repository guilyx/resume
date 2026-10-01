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

/** Company name with favicon and optional link. */
function CompanyLabel({ entry }: { entry: Experience }) {
  return (
    <>
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
    </>
  );
}

/** Bullet list for a single role. */
function BulletList({ entry }: { entry: Experience }) {
  return (
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
  );
}

/** Renders a single job entry. */
function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <div className="mb-5 print:mb-3 last:mb-0 print:break-inside-avoid">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="text-sm font-semibold text-primary">{entry.role}</h3>
        <span className="text-xs text-muted whitespace-nowrap">{entry.period}</span>
      </div>

      <p className="text-xs text-muted mt-0.5 inline-flex items-center gap-1.5 flex-wrap">
        <CompanyLabel entry={entry} />
        {entry.location && <span>, {entry.location}</span>}
      </p>

      {entry.promotions && (
        <p className="text-xs italic text-accent/80 mt-1">{entry.promotions}</p>
      )}

      <BulletList entry={entry} />
    </div>
  );
}

/** Overall span of a group, from the oldest role's start to the newest role's end. */
function groupPeriod(roles: Experience[]): string {
  const newestEnd = roles[0].period.split(" - ")[1];
  const oldestStart = roles[roles.length - 1].period.split(" - ")[0];
  return newestEnd ? `${oldestStart} - ${newestEnd}` : roles[0].period;
}

/** Renders several consecutive roles at the same company under one company header. */
function CompanyGroup({ roles }: { roles: Experience[] }) {
  const first = roles[0];
  return (
    <div className="mb-5 print:mb-3 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 flex-wrap">
          <CompanyLabel entry={first} />
          {first.location && (
            <span className="text-xs font-normal text-muted">, {first.location}</span>
          )}
        </h3>
        <span className="text-xs text-muted whitespace-nowrap">{groupPeriod(roles)}</span>
      </div>

      <div className="mt-2 ml-1 pl-3 border-l border-accent/30 space-y-3 print:space-y-2">
        {roles.map((role, idx) => (
          <div key={idx} className="print:break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h4 className="text-sm font-medium text-primary">{role.role}</h4>
              <span className="text-xs text-muted whitespace-nowrap">{role.period}</span>
            </div>
            <BulletList entry={role} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Groups consecutive entries that share a company, keeping the original order. */
function groupByCompany(entries: Experience[]): Experience[][] {
  const groups: Experience[][] = [];
  for (const entry of entries) {
    const last = groups[groups.length - 1];
    if (last && last[0].company === entry.company) {
      last.push(entry);
    } else {
      groups.push([entry]);
    }
  }
  return groups;
}

/** Work experience section listing all positions in chronological order. */
export function WorkExperience({ experience }: WorkExperienceProps) {
  const visibleEntries = experience.filter((entry) => entry.visible !== false);

  return (
    <Section title="Work Experience">
      {groupByCompany(visibleEntries).map((roles, idx) =>
        roles.length === 1 ? (
          <ExperienceEntry key={idx} entry={roles[0]} />
        ) : (
          <CompanyGroup key={idx} roles={roles} />
        ),
      )}
    </Section>
  );
}
