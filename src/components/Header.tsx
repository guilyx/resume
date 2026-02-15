// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";
import type { ContactInfo } from "../types/resume";

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

/** Top section of the resume: name, title, and contact links. */
export function Header({ name, title, contact }: HeaderProps) {
  const linkClass = "hover:text-accent transition-colors";

  // Build contact items dynamically so we only render what exists.
  const items: ReactNode[] = [];

  if (contact.email) {
    items.push(
      <a key="email" href={`mailto:${contact.email}`} className={linkClass}>
        {contact.email}
      </a>,
    );
  }
  if (contact.portfolio) {
    items.push(
      <a
        key="portfolio"
        href={contact.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {contact.portfolio.replace(/^https?:\/\//, "")}
      </a>,
    );
  }
  if (contact.github) {
    items.push(
      <a
        key="github"
        href={`https://github.com/${contact.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        github.com/{contact.github}
      </a>,
    );
  }
  if (contact.linkedin) {
    items.push(
      <a
        key="linkedin"
        href={`https://linkedin.com/in/${contact.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        linkedin.com/in/{contact.linkedin}
      </a>,
    );
  }
  if (contact.location) {
    items.push(<span key="location">{contact.location}</span>);
  }

  return (
    <header className="mb-6 sm:mb-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary">
        {name}
      </h1>
      <p className="mt-1 text-sm sm:text-base font-medium text-muted">
        {title}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-y-1 text-xs sm:text-sm text-muted">
        {items.map((item, idx) => (
          <span key={idx} className="inline-flex items-center">
            {idx > 0 && (
              <span aria-hidden className="mx-2 sm:mx-3 text-divider">
                &middot;
              </span>
            )}
            {item}
          </span>
        ))}
      </div>
    </header>
  );
}
