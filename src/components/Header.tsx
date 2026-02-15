// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";
import { Mail, Globe, MapPin, Github, Linkedin } from "lucide-react";
import type { ContactInfo } from "../types/resume";

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

/** Top section of the resume: name, title, and contact links. */
export function Header({ name, title, contact }: HeaderProps) {
  const linkClass = "hover:text-accent transition-colors";
  const iconSize = 13;

  // Build contact items dynamically so we only render what exists.
  const items: ReactNode[] = [];

  if (contact.email) {
    items.push(
      <a
        key="email"
        href={`mailto:${contact.email}`}
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Mail size={iconSize} className="shrink-0" />
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
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Globe size={iconSize} className="shrink-0" />
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
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Github size={iconSize} className="shrink-0" />
        {contact.github}
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
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Linkedin size={iconSize} className="shrink-0" />
        {contact.linkedin}
      </a>,
    );
  }
  if (contact.location) {
    items.push(
      <span key="location" className="inline-flex items-center gap-1">
        <MapPin size={iconSize} className="shrink-0" />
        {contact.location}
      </span>,
    );
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
