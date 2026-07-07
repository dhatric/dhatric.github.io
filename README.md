# dhatric.github.io

Personal portfolio website for [Giridhar Dhatric](https://giridhardhatric.me) — Staff Software Engineer.

Built with [Docusaurus v3](https://docusaurus.io/), hosted on GitHub Pages, served at **giridhardhatric.me**.

---

## Local Development

```bash
npm install
npm start        # dev server at http://localhost:3000
```

## Build & Preview

```bash
npm run build    # produces the static site in /build
npm run serve    # serves the /build output locally
```

## Deploy

Push to `main` — the GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages automatically via the `actions/deploy-pages` action.

---

## Pages & Content

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.tsx` | Hero, core competencies, career timeline |
| `/projects` | `src/pages/projects.tsx` | Project cards with tags and impact metrics |
| `/blog` | `blog/` | Technical blog posts (Markdown) |

**Adding a blog post:** Create a new file in `blog/` following the naming pattern `YYYY-MM-DD-slug.md`. Use `authors: [giri]` in the front matter.

---

## Project Structure

```
dhatric.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD — build + deploy to GitHub Pages
├── blog/
│   ├── authors.yml           # Blog author definitions
│   ├── tags.yml              # Blog tag definitions
│   └── YYYY-MM-DD-*.md       # Blog posts
├── src/
│   ├── css/
│   │   └── custom.css        # Global styles, CSS variables, component classes
│   └── pages/
│       ├── index.tsx         # Home page
│       ├── index.module.css  # Home page scoped styles
│       └── projects.tsx      # Projects page
├── static/
│   └── CNAME                 # Custom domain for GitHub Pages
├── docusaurus.config.ts      # Site configuration, navbar, footer, theme
├── package.json
└── tsconfig.json
```

---

## Custom Domain Setup

The site uses the custom domain `giridhardhatric.me` (registered on Namecheap).

**`static/CNAME`** contains `giridhardhatric.me` — Docusaurus copies this to the build root so GitHub Pages recognises the custom domain.

### Namecheap DNS Records

In the Namecheap **Advanced DNS** panel for `giridhardhatric.me`:

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | Automatic |
| A | @ | `185.199.109.153` | Automatic |
| A | @ | `185.199.110.153` | Automatic |
| A | @ | `185.199.111.153` | Automatic |
| CNAME | www | `dhatric.github.io` | Automatic |

After adding the records, enable **"Enforce HTTPS"** in the GitHub Pages repository settings (Settings → Pages → Custom domain).

---

## Configuration

The main configuration file is `docusaurus.config.ts`. Notable settings:

- `colorMode.defaultMode: 'dark'` — dark theme by default
- `colorMode.respectPrefersColorScheme: true` — respects OS preference
- `docs: false` — the docs plugin is disabled; only blog and custom pages are used
- `organizationName: 'dhatric'`, `projectName: 'dhatric.github.io'` — used by the deploy command


## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
