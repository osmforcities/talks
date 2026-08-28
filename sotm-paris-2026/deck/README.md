# Deck — OSM for Cities, SotM Paris 2026

Slidev. Source of truth is [`slides.md`](slides.md); speaker notes live in the HTML
comment at the end of each slide and show up in presenter mode.

```
pnpm install
pnpm dev       # http://localhost:3030 (presenter mode at /presenter)
pnpm export    # osm-for-cities-sotm-paris-2026.pdf — conference-laptop fallback
```

First PDF export on a new machine also needs `pnpm exec playwright install chromium`.

## Structure

- `slides.md` — content + speaker notes
- `global-top.vue` — progress rail: one dot per slide, larger dots where a section
  opens. Derived entirely from `section:` frontmatter keys — set one on the slide
  that opens a part; inserting, cutting or reordering slides cannot desync it
- `components/Shot.vue` — full-bleed screenshot with optional zoom crop (the panel tour)
- `styles/index.css` — colors and type, mirroring the app's design system
- `setup/mermaid.ts` — Mermaid palette, matched to the same CSS
- `public/qr-osmforcities.svg` — regenerate with
  `qrencode -t SVG -o public/qr-osmforcities.svg -l M -m 1 --foreground=171717 "https://osmforcities.org"`

## Gotchas

- `pnpm export` passes `--per-slide`. Without it, global layers that read
  navigation state render identically on every exported page.
- Scale diagrams by widening the SVG in CSS, not with Slidev's `{scale:}` fence
  option — that applies a CSS transform, which ignores the layout box and runs off
  both slide edges in the PDF export.

## Publishing

Built and deployed by [`.github/workflows/pages.yml`](../../.github/workflows/pages.yml)
to `osmforcities.github.io/talks/sotm-paris-2026/`, on push to `main`. Two flags there are
load-bearing: `--base /talks/sotm-paris-2026/` (or every asset 404s) and `--without-notes`
(speaker notes compile into the SPA and the `/notes` route publishes them otherwise).

Jekyll renders the site index; `_config.yml` excludes this directory so it does not try to
parse Slidev's repeated `---`.
