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
      <div className="space-y-2">
        {skills.map((group, idx) => (
          <div key={idx} className="print:break-inside-avoid">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-0.5">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-block rounded-full bg-surface px-2 py-px text-[11px] text-primary/80 border border-divider"
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
