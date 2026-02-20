import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div
          className="relative h-[42vh] min-h-[280px] w-full overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-semibold text-[var(--text-primary)] md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-4xl text-base text-[var(--text-secondary)] md:text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((techItem) => (
              <span
                key={techItem}
                className="rounded-full border px-3 py-1 text-xs text-[var(--text-secondary)]"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                {techItem}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-interactive
              className="btn-primary rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
            >
              GitHub
            </Link>
            <Link
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-interactive
              className="btn-secondary rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </section>

      <Section title="Screenshots">
        <div className="grid gap-8 md:grid-cols-2">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={screenshot}
              className="group relative h-64 overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <Image
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Section>
    </article>
  );
}
