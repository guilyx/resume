// Erwin Lejeune - 2026-02-15

import { Section } from "./Section";

interface ProfessionalSummaryProps {
  summary: string;
}

/** Renders the professional summary / objective section. */
export function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <Section title="Professional Summary">
      <p className="text-sm leading-relaxed text-primary/85">{summary}</p>
    </Section>
  );
}
