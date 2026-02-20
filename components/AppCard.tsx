"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { AppItem } from "@/data/apps";

type AppCardProps = {
  app: AppItem;
};

export default function AppCard({ app }: AppCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="card-glow group flex h-full flex-col rounded-2xl border bg-[var(--card-bg)] p-5 transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[color:var(--border-strong)]"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="mb-4 flex items-center gap-4">
        <div
          className="relative h-14 w-14 overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <Image
            src={app.icon}
            alt={app.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            {app.name}
          </h3>
          <p
            className="text-xs uppercase tracking-wide"
            style={{ color: "var(--text-secondary)" }}
          >
            {app.platform}
          </p>
        </div>
      </div>

      <p className="mb-6 text-sm text-[var(--text-secondary)]">
        {app.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-3">
        <Link
          href={app.download}
          target="_blank"
          rel="noreferrer"
          data-interactive
          className="btn-primary rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
        >
          Download
        </Link>
        <Link
          href={app.github}
          target="_blank"
          rel="noreferrer"
          data-interactive
          className="btn-secondary rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
        >
          GitHub
        </Link>
      </div>
    </motion.article>
  );
}
