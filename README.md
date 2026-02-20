# Felix Portfolio

Personal portfolio built with Next.js.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### One-time setup

1. Go to repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Ensure the default branch is `main`.

### Deployment flow

- Pushing to `main` triggers `.github/workflows/deploy-pages.yml`.
- The workflow runs `npm ci`, builds a static export (`out/`), and deploys it to Pages.

### Live URL

After a successful workflow run, the site is available at:

`https://cletches.github.io/felix-portfolio/`
