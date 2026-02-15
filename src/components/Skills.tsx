// Erwin Lejeune - 2026-02-15

import type { SkillGroup } from "../types/resume";
import { Section } from "./Section";

interface SkillsProps {
  skills: SkillGroup[];
}

/** Renders technology / skills grouped by category. */
export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Technology">
      <div className="space-y-3">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-block rounded-full bg-surface px-2.5 py-0.5 text-xs text-primary/80 border border-divider"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
