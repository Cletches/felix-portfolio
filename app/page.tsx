import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  return (
    <>
      <Hero />

      <Section title="Featured Projects" id="featured-projects">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Featured Apps" id="featured-apps">
        <div
          className="flex min-h-[32vh] items-center justify-center rounded-2xl border bg-[var(--card-bg)] px-6 py-14 text-center"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-lg text-[var(--text-secondary)]">
            Coming soon. This section will be live shortly.
          </p>
        </div>
      </Section>
    </>
  );
}
