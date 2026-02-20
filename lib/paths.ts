// Get the base path for images and assets based on environment
const getBasePath = () => {
  if (typeof window !== "undefined") {
    // Client-side: use window location
    const pathname = window.location.pathname;
    if (pathname.includes("/felix-portfolio")) {
      return "/felix-portfolio";
    }
  } else {
    // Server-side: check environment
    const isGithubActions = process.env.GITHUB_ACTIONS === "true";
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
    if (isGithubActions && repo) {
      return `/${repo}`;
    }
  }
  return "";
};

export const getImagePath = (path: string) => {
  const basePath = getBasePath();
  return basePath + path;
};
