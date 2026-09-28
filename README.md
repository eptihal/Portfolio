# Eptihal Nasr — Portfolio

A personal portfolio site built with **React + Vite + Tailwind CSS v4**.

## Why this stack
- **Vite** — instant local dev server, fast builds, minimal config.
- **React** — components map cleanly onto the site's sections, so any one piece (Skills, Projects, Contact...) can be edited without touching the rest.
- **Tailwind CSS v4** — utility classes keep styling co-located with markup; theme colors are defined once as CSS variables (`src/index.css`) and every component reads from them, so dark/light mode never needs per-component overrides.

## Project structure
```
portfolio/
├─ public/
│  └─ assets/
│     ├─ images/profile.jpg          ← your photo
│     └─ documents/Eptihal-Nasr-CV.pdf ← your CV (downloadable)
├─ src/
│  ├─ data/content.js                ← ALL editable content lives here
│  ├─ components/                    ← one file per section
│  ├─ hooks/useTheme.js              ← dark/light mode logic
│  ├─ index.css                      ← color tokens for both themes
│  └─ App.jsx
└─ index.html                        ← page title, meta/SEO tags
```

## Running locally
```bash
npm install
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`).

## Building for production
```bash
npm run build
```
Outputs a static site to `dist/`. Preview it with `npm run preview`.

## Deploying
The `dist/` folder is a static site — deploy it anywhere static hosting is supported:
- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: run `npm run build`, push the contents of `dist/` to a `gh-pages` branch (or use an action).
- Any static host (S3, Cloudflare Pages, etc.): upload the contents of `dist/`.

## Updating content
Almost everything on the site is data-driven from **`src/data/content.js`**. Open that file to change:

| To update... | Edit... |
|---|---|
| Name, headline, intro/about text | `profile` object |
| Email / LinkedIn / GitHub | `socials` object |
| Skills & proficiency labels | `skills` array |
| Work experience / training | `experience` array |
| Education | `education` object |
| Certifications | `certifications` array |
| Services offered | `services` array |
| Nav links | `nav` array |

### Adding a project
Projects are intentionally empty for now (per your request — no invented work). When you have a real project, add an object to the `projects` array in `src/data/content.js`, e.g.:
```js
export const projects = [
  {
    title: "Your project name",
    description: "One or two sentences on what it does.",
    tech: ["Python", "scikit-learn"],
    features: ["Key feature one", "Key feature two"],
    repo: "https://github.com/eptihal/your-repo",   // omit if none yet
    demo: "https://your-demo-link.com",              // omit if none yet
    image: "/assets/images/projects/your-image.jpg", // optional
  },
];
```
Leave `repo`, `demo`, or `image` out entirely until you have a real link — the card only shows what you provide, never a placeholder link.

### Replacing your profile photo
Replace `public/assets/images/profile.jpg` with a new image of the same filename (recommended: portrait orientation, at least 900px wide). No code changes needed.

### Replacing your CV
Replace `public/assets/documents/Eptihal-Nasr-CV.pdf` with your updated CV, keeping the same filename — both the Hero and Contact "Download CV" buttons already point to this path.

### Updating social links
Edit the `socials` object at the top of `src/data/content.js`.

## Accessibility & UX notes
- Semantic landmarks (`header`, `main`, `footer`), one `h1` per page, ordered `h2`s per section.
- Visible focus outlines on all interactive elements (keyboard-navigable throughout).
- `prefers-reduced-motion` is respected — entrance animation is disabled for users who request it.
- Theme toggle is a labeled, `aria-pressed` button; theme choice is saved to `localStorage` and falls back to the visitor's system preference on first visit.
- Color pairs in both themes meet WCAG AA contrast for body text.

## What was intentionally left out
Per your instructions, this build does not include any invented projects, fake statistics, testimonials, or unverified links. The Projects section ships with reserved placeholder slots ready for your first real project.
