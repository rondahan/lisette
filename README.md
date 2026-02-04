## Lisette – Haute Couture Landing Page

React + Vite single-page site for Lisette, a couture fashion studio, with bilingual (EN/HE) support and a responsive, editorial layout.

### Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind via CDN (configured in `index.html`)

### Getting Started (Local)

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Project Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – build for production (`dist/`)
- `npm run preview` – preview the production build locally

### Deploying to Vercel

1. Push this repo to GitHub (this project is set up for that).
2. In Vercel:
   - “Add New Project” → import `lisette` from GitHub.
   - Framework preset: **Vite** (Vercel usually detects it automatically).
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

No environment variables are required.

### Notes

- Language toggle (EN/HE) is in the header.
- Layout is fully responsive and optimized for mobile.