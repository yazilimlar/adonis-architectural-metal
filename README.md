# Adonis Architectural Metal

Production-ready foundation for the Adonis Architectural Metal brand, portfolio website and marketing platform.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Responsive custom CSS
- Vercel-ready configuration
- Initial inquiry API endpoint

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run typecheck
npm run build
```

## Publish to GitHub

Create an empty repository named `adonis-architectural-metal` under the `yazilimlar` GitHub account, then run:

```bash
git init
git add .
git commit -m "feat: initialize Adonis Architectural Metal website"
git branch -M main
git remote add origin git@github.com:yazilimlar/adonis-architectural-metal.git
git push -u origin main
```

## Deploy

Import the GitHub repository into Vercel, keep the detected Next.js defaults, add environment variables from `.env.example`, then deploy.

## Current status

This foundation includes the visual homepage, content taxonomy, placeholder portfolio, inquiry form and project documentation. Real contact data, verified company claims, photography, logo assets, CMS, email delivery, database persistence and analytics are Phase 2 tasks.
