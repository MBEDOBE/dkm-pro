# Phase 3 — Navigation, accessibility, SEO and performance

This update builds on **Phase 2**. It does not redesign the approved homepage,
change the service positioning, or remove any of the five projects.

## Changes implemented

### Services navigation

- **Services** still links to the homepage section (`/#services`), from every route.
- The active navigation state now tracks the actual Services section on the
  homepage instead of comparing `/` to `/#services`. Both desktop and mobile
  menus display this state, with `aria-current="location"` when appropriate.
- The existing `scroll-mt-24` spacing keeps the heading clear of the 76px
  sticky header. The target section is programmatically focusable.
- The mobile menu now closes when a route changes. **Escape** closes the menu
  and returns focus to its toggle button. The mobile contact CTA has a visible
  keyboard focus style.

### Accessibility

- Kept skip-to-content, semantic headings, descriptive project image alt text,
  visible focus indicators, responsive layouts, and reduced-motion behavior.
- Contact form error messages remain connected to their inputs via
  `aria-describedby`. Project-details helper text remains associated even when
  an error is shown.
- No claims of WCAG conformance are made: a manual keyboard + screen reader
  review and a browser-based audit are still recommended.

### SEO and domain readiness

- Created `lib/seo.ts` for consistent page-specific canonical URLs, Open Graph
  and X/Twitter previews across all four page routes.
- `lib/site.ts` uses `NEXT_PUBLIC_SITE_URL` at build time, defaulting to
  `https://dkmbedobe.onrender.com`. No domain migration was performed.
- The homepage Person JSON-LD now shares the same configured site URL.
- Registered a real site manifest with working 192px and 512px icons derived
  from the **existing** `dkm` favicon. Previously configured manifest icon URLs
  did not exist.
- `next-sitemap` now writes `robots.txt` and a single `sitemap.xml` into `out/`
  after the static export, which is the actual deployment artifact. Old copies
  in `public/` were removed to prevent stale duplicates. **Deploy `out/`**.
- Retained the existing portrait for social previews, using the smaller
  `summary` card format because this source image is portrait-oriented.
- The old `components/seo/SEO.tsx` file remains only for compatibility; no
  active App Router route imports it. Do not add `next/head` to App Router pages.

### Performance

- Retained every original full-resolution project screenshot in `public/assets`.
- Added 1400px wide WebP copies for project cards in
  `public/assets/thumbnails`. Across all five cards this reduces the combined
  image sizes from roughly **1.64 MB to 0.42 MB** (about 1.2 MB less when all
  five are loaded). Real-world savings depend on caching and which cards are
  actually visible.
- Home-page featured project images are no longer marked `priority` because
  they are well below the initial hero viewport; the hero image remains high
  priority, as does the first project on the dedicated portfolio page.
- Removed an unused Geist Mono font import. Geist Sans styling is unchanged.
- The site still uses static export (`output: "export"`) and unoptimized
  Next.js images, so the smaller card assets are important for page weight.

## Review locally

```bash
npm ci
npm run dev
npm run build
```

Test these specific interactions:

1. Desktop **and** mobile: click Services from About, Portfolio and Contact;
   confirm it scrolls to the correct homepage section without hiding the title.
2. Scroll into and out of Services; confirm that Services highlights only while
   the section is in the main reading area. Confirm Home highlights elsewhere
   on the homepage.
3. On mobile: open the menu, press Escape, and confirm the button receives
   focus again. Check the contact CTA's Tab focus state.
4. Test keyboard navigation, screen reader headings/landmarks, and reduced
   motion on the homepage and contact page.
5. Submit a real **test** enquiry and verify that it arrives in Formspree.
   Inspect both success and failure message displays.
6. After `npm run build`, verify `out/sitemap.xml`, `out/robots.txt`, and
   `out/site.webmanifest` exist. Check the generated sitemap lists `/`,
   `/portfolio`, `/about-daniel-mbedobe` and `/contact`.
7. Inspect page source/social preview metadata, check image loading on mobile,
   and run browser-based Lighthouse/PageSpeed audits on the deployed version.

## Domain change later

At deployment build time, provide a **full HTTPS URL** (without path), e.g.

```
NEXT_PUBLIC_SITE_URL=https://your-future-domain.example
```

Rebuild and deploy `out/` so canonicals, structured data, Open Graph URLs,
robots and sitemap all use the new domain together. Do not change the domain
variable until DNS/hosting and redirects are prepared.

## Validation performed in this environment

- TypeScript/TSX source syntax parsing and static asset/route checks (see
  validation output in the handoff).
- Could not install all dependencies offline (`yocto-queue` package archive was
  missing from npm cache); therefore no full Next.js production build, visual
  browser test, live Formspree test or Lighthouse run was completed here.
- Phase 2 previously passed a production build in the user's environment.
