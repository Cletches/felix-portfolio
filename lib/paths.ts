// Get the base path for images and assets based on environment and context
const getBasePath = () => {
  // Hardcode for GitHub Pages where we know the basePath is /felix-portfolio
  // This is needed during static export at build time
  const isProduction =
    process.env.NODE_ENV === "production" ||
    process.env.GITHUB_ACTIONS === "true";

  if (isProduction) {
    // In production (GitHub Pages), always use /felix-portfolio
    return "/felix-portfolio";
  }

  if (typeof window !== "undefined") {
    // Client-side: use window location to detect if we're on the subpath
    const pathname = window.location.pathname;
    if (pathname.includes("/felix-portfolio")) {
      return "/felix-portfolio";
    }
  }

  return "";
};

export const getImagePath = (path: string) => {
  const basePath = getBasePath();
  return basePath + path;
};
