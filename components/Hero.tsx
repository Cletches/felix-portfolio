"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 120]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <motion.div
        style={{ y: backgroundY, backgroundImage: "url('/images/hero.jpg')" }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl font-bold tracking-tight text-[var(--text-primary)] md:text-7xl"
        >
          Felix Ofori
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-4 text-lg sm:text-xl">
          <span className="gradient-text">Software Engineer &amp; Builder</span>
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg"
        >
          I design and build software that solves real problems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/projects"
            data-interactive
            prefetch
            className="btn-primary rounded-md px-6 py-3 font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            View Projects
          </Link>
          <Link
            href="/apps"
            data-interactive
            prefetch
            className="btn-secondary rounded-md px-6 py-3 font-medium transition-all duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            Download My Apps
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
