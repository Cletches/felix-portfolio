"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="card-glow group overflow-hidden rounded-2xl border bg-[var(--card-bg)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[color:var(--border-strong)]"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <Link href={`/projects/${project.slug}`} className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="space-y-4 p-5">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xl font-semibold text-[var(--text-primary)]"
        >
          {project.title}
        </Link>
        <p className="text-sm text-[var(--text-secondary)]">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((techItem) => (
            <li
              key={techItem}
              className="rounded-full border px-3 py-1 text-xs text-[var(--text-secondary)]"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              {techItem}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            data-interactive
            className="btn-primary rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            View Project
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-interactive
            className="btn-secondary rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
