# Portfolio — Oitash Ghosh

Personal portfolio site. Next.js 16 (App Router) + Tailwind CSS v4 + Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where the content lives

Everything a recruiter reads is in a single file: [`src/lib/data.ts`](src/lib/data.ts).
Edit that and the whole page follows — no component changes needed.

| Export        | Drives                                                    |
| ------------- | --------------------------------------------------------- |
| `site`        | Name, role, tagline, contact details, résumé path, canonical URL |
| `socials`     | GitHub / LinkedIn / LeetCode links (hero + footer). Each entry's `label` must match a brand mark in `components/ui.tsx` for its icon to render |
| `experience`  | Timeline entries. `current: true` gives the pulsing dot + "Current" badge; `team`, `project` and `credential` are optional and only render when set. Bullets support `**bold**` |
| `projects`    | Project cards. `live` / `repo` are optional; the buttons hide when absent. `metrics` fills the "At a glance" panel |
| `skills`      | Skill groups                                              |
| `achievements`, `education`, `stats`, `navItems` | The remaining sections and the nav |

## Things to swap before you deploy

1. **`site.url`** in `src/lib/data.ts` — currently `https://oitashghosh.vercel.app`. It sets the canonical URL and OG tags.
2. **`public/Oitash_Ghosh_Resume.pdf`** — a regenerated one-page résumé that includes the Handshake role. Replace it with the PDF from your own LaTeX source.
3. **`public/oitash.jpeg`** — swap in a non-ID photo if you have one; the hero applies a slight desaturation + palette tint to the current one.
4. **`public/Amazon_Internship_Certificate.pdf`** — linked from the Amazon timeline entry. It's a public file once deployed, and it names your Amazon manager; drop `credential` from the Amazon entry in `data.ts` if you'd rather not publish it.

## Notes

- Theme is dark by default, persisted in `localStorage`, with an inline script in
  `src/app/layout.tsx` that applies it before first paint (no flash).
- `src/app/opengraph-image.tsx` generates the 1200×630 social preview at build time.
- Everything is server-rendered; Motion is only used for scroll reveals, and all
  animation is skipped under `prefers-reduced-motion`.
