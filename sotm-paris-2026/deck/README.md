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
- `global-top.vue` — the section rail (see below)
- `styles/index.css` — colors and type, mirroring `app/src/app/globals.css`
  (Geist, near-black on white, olive `#57814c`)
- `setup/mermaid.ts` — Mermaid palette, matched to the same CSS
- `public/qr-osmforcities.svg` — regenerate with
  `qrencode -t SVG -o public/qr-osmforcities.svg -l M -m 1 --foreground=171717 "https://osmforcities.org"`

## Progress rail

A strip of dots along the bottom of every slide, one per slide, filling olive as
you advance — so the audience can see how far into the talk they are. Slides that
open a section get a larger dot, which also shows how long the current part runs
and where the next one starts.

Each dot is a button: click to jump, hover for the slide title. Titles come from
each slide's first heading; slides with no heading fall back to their section name.

Add or rename a part by setting `section:` in the frontmatter of the slide that
opens it. `global-top.vue` derives the whole rail from those keys, so inserting,
cutting or reordering slides can't desync it. Slides before the first `section:`
(the cover) get no rail.

Three constraints worth knowing:

- It must be `global-top.vue`, not `global-bottom.vue` — the bottom layer paints
  beneath the slide, and `.slidev-layout` has an opaque background, so the rail
  is invisible there.
- `pnpm export` passes `--per-slide`. Without it, global layers that read
  navigation state render identically on every exported page.
- Slidev's own hover toolbar is hidden (`styles/index.css`). It is anchored
  bottom-left, directly over the dot strip, and pops up on the projector at any
  stray mouse movement. Keyboard shortcuts and `/presenter` are unaffected:
  arrows navigate, `o` opens the slide overview, `f` toggles fullscreen.

`transition: slide-left` in the headmatter animates between slides; Slidev reverses
it automatically when navigating backwards. Override per slide with `transition:` in
that slide's frontmatter. The rail sits outside the transition container, so it stays
put while the content slides.

The cover is full-bleed deep olive via `class: cover` in the headmatter (slide-level
keys there apply to the first slide only). Deep olive rather than the mid accent:
white on `#57814c` is only ~4.5:1, thin for the small credit line, while `#293f25`
clears 11:1.

`colorSchema: light` is pinned in the headmatter — on `auto`, a venue laptop in dark
mode flips Mermaid's palette to dark nodes while the CSS stays light.

Scale diagrams by widening the SVG in CSS, not with Slidev's `{scale:}` fence option —
that applies a CSS transform, which ignores the layout box and runs off both slide
edges in the PDF export.

## Publishing

Built and deployed by [`.github/workflows/pages.yml`](../../.github/workflows/pages.yml)
to `osmforcities.github.io/talks/sotm-paris-2026/`, on push to `main`. Two flags there are
load-bearing: `--base /talks/sotm-paris-2026/` (or every asset 404s) and `--without-notes`
(speaker notes compile into the SPA and the `/notes` route publishes them otherwise).

Jekyll renders the site index; `_config.yml` excludes this directory so it does not try to
parse Slidev's repeated `---`.

## Outstanding assets

Each is a dashed green placeholder in the deck, so a missing one cannot survive a
rehearsal. Tracked in the talk outline, which lives in the private prep folder
(`osmforcities-dev/docs/talks/sotm-global-2026/outline.md`) and is deliberately not
published here.
