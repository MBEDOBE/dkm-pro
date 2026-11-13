# Phase 1 — Portfolio redesign

This is an incremental redesign of the uploaded **Next.js App Router** portfolio (`dkm-pro.zip`). The existing projects, image assets, About page, and Formspree contact integration are retained.

## Changes

- **Homepage:** Client-facing headline, portrait, two calls to action, three featured projects, service cards, process overview, About teaser, and contact call to action.
- **Navigation:** Replaces the icon-only floating sidebar with a labeled sticky header and an accessible expandable mobile menu. The old `components/sidebar/Sidebar.tsx` is retained in the repository but is no longer rendered.
- **Project pages:** Replaces the Swiper carousel with a responsive project card grid. All five original projects, their images, technology stacks, and destination URLs remain available.
- **Project data:** A shared `data/projects.ts` now drives both the homepage and the `/portfolio` page.
- **Global layout:** Removes the full-viewport height and overflow clipping that prevented natural long-page scrolling. Adds a shared footer, skip link, and typography cleanup.
- **Metadata:** Uses the Next.js App Router Metadata API on all pages and fixes the homepage structured-data portrait path to `/assets/pp.webp`.

## Key files

- `components/homepage/AnimatedHome.tsx`
- `components/portfolio/AnimatedPortfolio.tsx`
- `components/portfolio/ProjectCard.tsx` (new)
- `data/projects.ts` (new)
- `components/topbar/Topbar.tsx`
- `components/footer/Footer.tsx` (new)
- `app/layout.tsx`, `app/globals.css`, and `app/**/page.tsx`

## Run locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` and check `/`, `/portfolio`, `/about-daniel-mbedobe`, and `/contact` at mobile and desktop widths.

For the production static export used by the original project:

```bash
npm run build
```

## Verification & remaining work

- Source-level TypeScript/TSX syntax transpilation: **passed** for all changed TypeScript files.
- Internal route presence: **passed** for links in new components.
- Dependency installation and a full production build: **not verified** in this environment because `npm ci` stalled during package installation. Please run the commands above in a connected local development environment.
- **Formspree:** The original integration is preserved unchanged. Actual message delivery still needs a live end-to-end test.
- **Live project URLs:** Carried over from the source; availability was not independently retested.
- **SEO:** The canonical base still uses the current Render URL. Update `metadataBase` in `app/layout.tsx`, the JSON-LD URL and image fields in `app/page.tsx`, `next-sitemap.config.js`, and `public/robots.txt` / sitemap when you migrate domains.
- **Phase 2:** Refine the existing About and Contact pages, test keyboard navigation and mobile breakpoints, then validate performance and SEO.

No fabricated client testimonials, business outcomes, or performance metrics were added.
