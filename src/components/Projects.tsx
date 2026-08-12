// Erwin Lejeune - 2026-02-15

import type { Project } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface ProjectsProps {
  projects: Project[];
}

/** Strip protocol and trailing slash so links read as plain domains. */
function toDisplayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** Renders a condensed list of personal / open-source projects. */
export function Projects({ projects }: ProjectsProps) {
  const visibleProjects = projects.filter((project) => project.visible !== false);

  return (
    <Section title="Projects">
      <ul className="space-y-2.5">
        {visibleProjects.map((project, idx) => {
          // Repository wins as the primary link; the live page is the fallback.
          const primaryUrl = project.repoUrl ?? project.liveUrl;
          const secondaryUrl = project.repoUrl ? project.liveUrl : undefined;

          return (
            <li key={idx}>
              <p className="text-sm font-semibold text-primary leading-snug inline-flex items-start gap-1.5">
                {primaryUrl && <Favicon url={primaryUrl} size={13} className="mt-0.5" />}
                <span>
                  {primaryUrl ? (
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </span>
              </p>
              <p className="text-xs text-muted mt-0.5">{project.description}</p>
              {secondaryUrl && (
                <a
                  href={secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent/80 hover:text-accent transition-colors"
                >
                  {toDisplayUrl(secondaryUrl)}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
