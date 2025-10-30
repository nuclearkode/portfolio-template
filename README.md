# Jordan Mitchell · Engineering Portfolio

This project is a bespoke portfolio for a principal platform engineer. It pairs Astro’s
content collections with handcrafted layouts to showcase large-scale engineering programs,
interactive telemetry, and a full project log.

## ✨ Highlights

- Full-width hero with mission status, availability, and quick actions.
- Interactive mission metrics, focus mode toggles, and filterable project log.
- Engineering capabilities, testimonials, and experience timeline for fast stakeholder context.
- Journal powered by Astro Content Collections with Markdown + MDX support.
- Global typography, color, and layout system tuned for readability on any device.

## 🗂️ Project structure

```
├── src
│   ├── components      # Header, footer, and shared UI primitives
│   ├── content         # Markdown & MDX case studies and journal entries
│   ├── layouts         # Blog and case-study layout
│   ├── pages           # Home, about, and journal routes
│   └── styles          # Global design tokens and utilities
├── public              # Images, fonts, and favicon
├── astro.config.mjs    # Astro configuration
└── package.json        # Scripts and dependencies
```

## 🚀 Quick start

```bash
npm install
npm run dev
```

Visit <http://localhost:4321> to explore the site. Update project data in `src/data/projects.ts`,
long-form content in `src/content`, and tweak styles in `src/styles/global.css` to make it your own.

## 🧰 Available scripts

| Command           | Description                                |
| :---------------- | :----------------------------------------- |
| `npm run dev`     | Start the development server               |
| `npm run build`   | Generate a production-ready build in `dist` |
| `npm run preview` | Preview the production build locally        |

## 📬 Deployment

The site is optimized for static hosting and works great on Cloudflare Pages, Netlify, or
Vercel. Build the project and upload the `dist/` directory to your platform of choice.

---

Crafted with Astro and a love for reliable systems.
