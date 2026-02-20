import Link from "next/link";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section title="Let's Build Something">
      <div
        className="rounded-2xl border bg-[var(--card-bg)] p-8 md:p-10"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
          Have a project in mind or need a product-minded engineer to ship
          something new? Reach out and let's create something world-class.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="mailto:felixoforicl37@gmail.com"
            data-interactive
            className="btn-primary rounded-md px-6 py-3 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            Email Felix
          </Link>
          <Link
            href="https://www.linkedin.com/in/felix-ofori-633471215/"
            target="_blank"
            rel="noreferrer"
            data-interactive
            className="btn-secondary rounded-md px-6 py-3 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </Section>
  );
}
