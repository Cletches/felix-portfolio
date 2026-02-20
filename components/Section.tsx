import Reveal from "@/components/Reveal";
import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="mb-10 text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
