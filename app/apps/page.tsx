import Section from "@/components/Section";

export default function AppsPage() {
  return (
    <Section title="Apps">
      <div
        className="flex min-h-[40vh] items-center justify-center rounded-2xl border bg-[var(--card-bg)] px-6 py-16 text-center"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <p className="text-lg text-[var(--text-secondary)]">
          Coming soon. This page will be live shortly.
        </p>
      </div>
    </Section>
  );
}
