# Portfolio Website — Build Instructions

## Objective
Build a production-ready, professional personal portfolio website for a **Staff Software Engineer** role. The site should be a polished place where recruiters, hiring managers, and peers can discover my work, background, and writing.

## Tech Stack
- **Framework:** [Docusaurus](https://docusaurus.io/) (latest v3)
- **Package manager:** npm
- **Styling:** Docusaurus theming with a **dark theme enabled by default** (respect the user's OS preference, but default to dark).

## Content Source
- Use the attached [resume.md](resume.md) as the single source of truth for all content: professional summary, experience, skills, education, and certifications.

resume.md is just for reference, I will delete it later. Copy respective content to respectice modules


- Keep wording professional, concise, and results-oriented.

## Required Pages
1. **Home (`/`)** — Portfolio landing page featuring:
   - Hero section with name, title (Staff Software Engineer), and a brief summary.
   - Highlighted core competencies / tech stack.
   - Quick links to LinkedIn, GitHub, email, and resume.
2. **Projects (`/projects`)** — Showcase of key projects and platform work, derived from the resume experience (workflow platform, omnichannel commerce platform, subscription platform, etc.). Use cards with descriptions, tech tags, and impact metrics.
3. **Blog (`/blog`)** — Docusaurus blog for articles and technical writing (start with a welcome/intro post).

## Design Requirements
- Clean, modern, professional aesthetic suited to a senior/staff engineering audience.
- Dark theme by default with good contrast and readable typography.
- Responsive across desktop, tablet, and mobile.
- Accessible (semantic HTML, alt text, adequate color contrast).

## Deployment & Hosting
- **Host:** GitHub Pages via the `dhatric.github.io` repository.
- **Custom domain:** `giridhardhatric.me` (purchased from Namecheap).
  - Add a `CNAME` file with the custom domain.
  - Document the Namecheap DNS records (A records + CNAME) needed to point the domain to GitHub Pages.
- **CI/CD:** Add a GitHub Actions workflow that builds the Docusaurus site and deploys to GitHub Pages automatically on push to the default branch.

## Documentation
- Create a `README.md` that helps both humans and AI agents understand the codebase:
  - Local development, build, and deploy commands.
  - Page/route structure and where content lives.
  - Project architecture and folder layout.
  - How deployment and the custom domain are wired up.

## Definition of Done
- Site builds cleanly with no errors.
- All three pages (Home, Projects, Blog) render with real content from the resume.
- Dark theme is the default.
- GitHub Actions workflow deploys successfully to GitHub Pages.
- Custom domain configuration (CNAME + DNS notes) is in place.
- `README.md` documents commands, pages, and architecture.