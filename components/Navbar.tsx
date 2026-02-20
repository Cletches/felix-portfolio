"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        isScrolled ? "border-b" : "bg-transparent",
      )}
      style={{
        borderColor: "var(--border-subtle)",
        backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide"
          style={{ color: "var(--text-primary)" }}
        >
          Felix
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              className="text-sm transition duration-300 hover:-translate-y-0.5 hover:text-[var(--text-primary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((current) => !current)}
          className="rounded-md p-2 transition hover:bg-white/10 md:hidden"
          style={{ color: "var(--text-secondary)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="border-t px-6 py-4 md:hidden"
          style={{
            borderColor: "var(--border-subtle)",
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                prefetch
                className="transition"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
