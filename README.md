# Jordan Mitchell · Product Design Portfolio

This project is a bespoke portfolio site for a senior product designer. It pairs Astro’s
content collections with handcrafted layouts to showcase case studies, services, and
long-form writing. The design emphasizes inclusive, outcomes-driven storytelling.

## ✨ Highlights

- Hero section with quick access to recent work and contact actions.
- Detailed project spotlights with measurable outcomes and process notes.
- Service offerings, testimonials, and experience timeline for quick stakeholder context.
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

Visit <http://localhost:4321> to explore the site. Update the content in `src/content`
and tweak styles in `src/styles/global.css` to make it your own.

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

Crafted with Astro and a love for inclusive design.
