export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
  screenshots: string[];
};

export const projects: Project[] = [
  {
    title: "Fijai Church Website",
    slug: "fijai-church-website",
    description:
      "A modern church website focused on clarity, community updates, and service information.",
    image: "/images/projects/commerce.png",
    github: "https://github.com/Cletches/Fijai-Church-",
    demo: "https://fijaicoc.org",
    tech: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      "/images/projects/commerce-screen-1.png",
      "/images/projects/commerce-screen-2.png",
    ],
  },
  {
    title: "Hate Speech Detection Model",
    slug: "hate-speech-detection-model",
    description:
      "Machine learning model for classifying harmful language with a focus on NLP pipelines.",
    image: "/images/projects/analytics.png",
    github: "https://github.com/Cletches/Hate-speech-detection-model",
    demo: "https://github.com/Cletches/Hate-speech-detection-model",
    tech: ["Python", "Machine Learning", "NLP"],
    screenshots: [
      "/images/projects/analytics-screen-1.png",
      "/images/projects/analytics-screen-2.png",
    ],
  },
  {
    title: "Trading Bot",
    slug: "trading-bot",
    description:
      "Automated trading system that connects to exchanges and executes strategies.",
    image: "/images/projects/tradingbot.png",
    github: "https://github.com/Cletches/tradingbot",
    demo: "https://github.com/Cletches/tradingbot",
    tech: ["Python", "APIs", "Automation"],
    screenshots: [
      "/images/projects/tradingbot-screen-1.png",
      "/images/projects/tradingbot-screen-2.png",
    ],
  },
  {
    title: "Church Management App",
    slug: "church-management-app",
    description:
      "Management platform for members, events, and internal church operations.",
    image: "/images/projects/automation.png",
    github: "https://github.com/Cletches/Church_management_app",
    demo: "https://github.com/Cletches/Church_management_app",
    tech: ["React", "Node.js", "MongoDB"],
    screenshots: [
      "/images/projects/automation-screen-1.png",
      "/images/projects/automation-screen-2.png",
    ],
  },
  {
    title: "Calendar Project",
    slug: "calendar-project",
    description:
      "Interactive calendar interface built for scheduling and date navigation.",
    image: "/images/projects/meeting-assistant.png",
    github: "https://github.com/Cletches/Calendar-Project",
    demo: "https://github.com/Cletches/Calendar-Project",
    tech: ["JavaScript", "HTML", "CSS"],
    screenshots: [
      "/images/projects/meeting-screen-1.png",
      "/images/projects/meeting-screen-2.png",
    ],
  },
  {
    title: "My Dropshipping Page",
    slug: "my-dropshipping-page",
    description:
      "Product landing page focused on conversion and clean presentation.",
    image: "/images/projects/logistics.png",
    github: "https://github.com/Cletches/My-Dropshipping-Page",
    demo: "https://github.com/Cletches/My-Dropshipping-Page",
    tech: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      "/images/projects/logistics-screen-1.png",
      "/images/projects/logistics-screen-2.png",
    ],
  },
];