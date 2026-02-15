// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/** Reusable section wrapper with a consistent heading style. */
export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent border-b border-divider pb-1 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
