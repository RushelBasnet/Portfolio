# Rushel Basnet — Personal Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, and custom CSS. It is designed to present AI engineering/software projects to both recruiters and potential freelance clients.

## Features
- Responsive light-theme landing page
- Project cards and statically generated case-study pages
- SEO metadata and semantic page structure
- GitHub, LinkedIn, and email links
- No database or environment variables required

## Run locally

Requirements: Node.js 20.9+ recommended.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a GitHub repository and push this folder's contents.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings and deploy.
4. Replace `https://example.com` in `app/layout.tsx` with the final domain for correct metadata.

## Before publishing
- Confirm all project details and metrics against the actual implementations.
- The AI Receptionist card currently links to the main GitHub profile because a dedicated repository URL has not been confirmed.
- Add a resume PDF if you want a download link.
- Update `metadataBase` in `app/layout.tsx` after selecting a domain.
- Replace `rushel.dev` branding if using a different domain.

## Project content
Project information lives in `lib/projects.ts`. Edit it to update descriptions, technologies, repository links, metrics, status, and demo URLs.
