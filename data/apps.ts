export type AppItem = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  platform: string;
  download: string;
  github: string;
};

export const apps: AppItem[] = [
  {
    name: "Pulse Notes",
    slug: "pulse-notes",
    icon: "/images/apps/pulse-notes.png",
    description:
      "A focused note-taking app with tags, quick capture, and cloud sync for builders on the move.",
    platform: "iOS • Android",
    download: "https://apps.example.com/pulse-notes",
    github: "https://github.com/felixofori/pulse-notes",
  },
  {
    name: "Orbit Habit",
    slug: "orbit-habit",
    icon: "/images/apps/orbit-habit.png",
    description:
      "Habit tracking built for consistency with streak analytics and beautiful daily reminders.",
    platform: "iOS • Android • Web",
    download: "https://apps.example.com/orbit-habit",
    github: "https://github.com/felixofori/orbit-habit",
  },
  {
    name: "Focus Timer Pro",
    slug: "focus-timer-pro",
    icon: "/images/apps/focus-timer-pro.png",
    description:
      "Deep work timer with sessions, ambient sounds, and productivity reports.",
    platform: "macOS • Windows",
    download: "https://apps.example.com/focus-timer-pro",
    github: "https://github.com/felixofori/focus-timer-pro",
  },
  {
    name: "Pocket Budget",
    slug: "pocket-budget",
    icon: "/images/apps/pocket-budget.png",
    description:
      "Personal finance tracker with cashflow insights and lightweight monthly planning.",
    platform: "Android • Web",
    download: "https://apps.example.com/pocket-budget",
    github: "https://github.com/felixofori/pocket-budget",
  },
  {
    name: "Builder Journal",
    slug: "builder-journal",
    icon: "/images/apps/builder-journal.png",
    description:
      "Private engineering journal for documenting product decisions and project milestones.",
    platform: "Web",
    download: "https://apps.example.com/builder-journal",
    github: "https://github.com/felixofori/builder-journal",
  },
  {
    name: "Launch Checklist",
    slug: "launch-checklist",
    icon: "/images/apps/launch-checklist.png",
    description:
      "Pre-launch checklist manager for startups to ship faster with confidence.",
    platform: "iOS • Web",
    download: "https://apps.example.com/launch-checklist",
    github: "https://github.com/felixofori/launch-checklist",
  },
];