# Ahmed · Engineering Portfolio

This repository now hosts the single-page robotics portfolio exactly as delivered in the latest design review. It is a plain static site with no build tooling, making it ideal for Cloudflare Pages or any other static host.

## 📁 Structure

```
├── index.html              # Main page markup
├── assets/
│   ├── css/styles.css      # Extracted global styles
│   ├── js/main.js          # Theme, language, cursor, and arm controls
│   └── images/             # Noise textures and profile illustration
```

## 🚀 Deployment

Because the site is fully static, simply upload the repository (or the files above) to your host. For Cloudflare Pages, select this repo and set the framework preset to **None** so the root `index.html` is served directly.

No build step or package installation is required.
