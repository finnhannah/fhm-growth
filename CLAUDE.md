# FHM Growth

Single-page marketing site for FHM Growth, a Calgary agency running Meta (Facebook/Instagram) ads for contractors. Live at https://www.fhmgrowth.com, hosted on Vercel (project `fhm-growth`). Source pushed to https://github.com/finnhannah/fhm-growth (branch `main`). Once the Vercel project is connected to this repo, a push to `main` redeploys the live site.

## Files

- `index.html`: the live site. Plain HTML, no build step. Contains JSON-LD FAQ data in `<head>` that must stay in sync with the visible FAQ.
- `styles.css`: all styling. `script.js`: Book a Call link target (`BOOKING_URL` / `CONTACT_EMAIL`), footer year, and the rotating trade word in the hero.
- `assets/`: logo, hero feed photos (Wikimedia, credited in the page), social share image, app icons. Root also holds the favicons, `site.webmanifest`, `robots.txt` and `sitemap.xml`.
- `fhm-website.html`, `fhm-icon.png`: an older, unused design. They're kept out of the deploy by `.vercelignore` (along with this file).

## Editing

- Match the existing class-based CSS in `styles.css`. Don't add a framework unless asked.
- Fonts: Inter. Layouts must keep working at phone width.
- The offer is "No lead, no fee": the management fee starts with the first qualified lead (a real person who clicks a Meta ad and fills out the estimate form). Ad spend is paid to Meta from day one. Keep any pricing copy consistent with this, including the meta and og/twitter descriptions and the JSON-LD FAQ.
- The claude.ai "FHM Growth Website" design artifact is a separate mockup, not the live site.

## Working with the owner

The owner is not a developer. Explain steps in plain language, keep them short, and handle git commands for them (commit and push when they ask to update the site).
