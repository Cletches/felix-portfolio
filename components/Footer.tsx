import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t bg-black/40"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center">
        <p className="text-[var(--text-primary)]">Felix Ofori</p>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[var(--text-secondary)]">
          <Link
            href="https://github.com/Cletches"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.55)]"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/felix-ofori-633471215/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.55)]"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:felixoforicl37@gmail.com"
            className="transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.55)]"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
