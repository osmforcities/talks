<script setup lang="ts">
import { computed } from "vue";
import { useNav } from "@slidev/client";

const { slides, currentSlideNo, go } = useNav();

// Sections come from a `section:` key in the frontmatter of the slide that opens each
// part. Deriving the rail from the slides themselves — rather than hardcoding page
// numbers here — keeps it honest when slides get added, cut or reordered.
const sections = computed(() =>
  slides.value
    .map((s, i) => ({
      name: (s.meta?.slide?.frontmatter as Record<string, unknown> | undefined)
        ?.section as string | undefined,
      no: i + 1,
    }))
    .filter((s): s is { name: string; no: number } => Boolean(s.name)),
);

// Slide numbers that open a section, drawn as larger "milestone" dots in the strip.
const sectionStarts = computed(() => new Set(sections.value.map((s) => s.no)));

// Running head: the section the current slide belongs to, shown next to the rail on
// every slide — the audience regains context whenever they glance down. Replaces the
// per-opener kicker, which named the section only once.
const currentSection = computed(
  () =>
    [...sections.value].reverse().find((s) => s.no <= currentSlideNo.value)?.name,
);

// Slidev derives `title` from each slide's first heading, markup and all — the
// two-line headings arrive with a literal <br> in them.
const plain = (t: string) => t.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

// Slides built entirely from asset placeholders have no heading, so fall back to the
// section they belong to.
const dots = computed(() =>
  slides.value.map((s, i) => {
    const no = i + 1;
    const raw = s.meta?.slide?.title as string | undefined;
    const section = [...sections.value].reverse().find((sec) => sec.no <= no);
    return {
      no,
      title: (raw && plain(raw)) || section?.name || `Slide ${no}`,
      isSection: sectionStarts.value.has(no),
      // First and last get their own shape, so the strip reads as a bounded track
      // rather than an indefinite stream. Both stay clickable: jumping to the cover
      // or the closing slide are the two jumps worth making during Q&A.
      isEnd: no === 1 || no === slides.value.length,
    };
  }),
);
</script>

<template>
  <footer class="section-rail">
    <span v-if="currentSection" class="running-head">{{ currentSection }}</span>
    <nav class="dots" aria-label="Slide progress">
      <button
        v-for="d in dots"
        :key="d.no"
        type="button"
        :class="{ done: d.no <= currentSlideNo, mark: d.isSection, end: d.isEnd }"
        :data-title="d.title"
        :aria-label="`Slide ${d.no}: ${d.title}`"
        :aria-current="d.no === currentSlideNo ? 'true' : undefined"
        @click="go(d.no)"
      >
        <span class="shape" />
      </button>
    </nav>
  </footer>
</template>

<style>
/* global-top, not global-bottom: the bottom layer paints beneath the slide, and
   .slidev-layout has an opaque white background, so the rail was invisible there. */
.section-rail {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* Above full-bleed <Shot> images (inset-0) and their caption bar (z-index 1),
     which otherwise paint over the rail. */
  z-index: 10;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.5rem 1.4rem;
  font-size: 0.8rem;
  line-height: 1;
}

/* One dot per slide, filled through the current one — audience-facing progress.
   Slides that open a section get a larger dot, so the strip also shows how far
   the current part runs. */
/* 19px gap + the 5px dot = 24px between centres. Enlarging the hit area alone
   would have made things worse, not better: at the old 7px gap the boxes
   overlapped, and an overlapping target hands the click to its neighbour. */
.section-rail .dots {
  display: flex;
  align-items: center;
  gap: 19px;
  /* Re-enabled here only: the rail as a whole stays click-through so it can't
     swallow clicks meant for the slide. */
  pointer-events: auto;
}


/* rgba warm white at 0.38: ~4.6:1 on the dark ground, over the 3:1 floor for
   non-text UI, while staying clearly the unvisited half next to the olive fill. */
/* The button is only a hit target and the tooltip's anchor; the visible dot is the
   inner .shape. Keeping them separate is what lets the end markers rotate into
   diamonds — rotating the button would rotate its ::after tooltip with it. */
.section-rail button {
  position: relative;
  width: 5px;
  height: 5px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.section-rail .shape {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(245, 244, 239, 0.38);
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.section-rail button.done .shape {
  background: var(--ofc-accent);
}

.section-rail button.mark {
  width: 9px;
  height: 9px;
}

.section-rail button.mark .shape {
  background: transparent;
  border: 1.5px solid rgba(245, 244, 239, 0.38);
}

.section-rail button.mark.done .shape {
  background: var(--ofc-accent);
  border-color: var(--ofc-accent);
}

/* First and last slide: a diamond, so the strip has visible ends. A rotated square
   rather than a bigger circle — it differs in silhouette, not just in size, which is
   what survives being 8px on a projector. Both remain buttons, so the cover and the
   closing slide stay one click away throughout Q&A. */
.section-rail button.end {
  width: 8px;
  height: 8px;
}

.section-rail button.end .shape {
  border-radius: 1px;
  transform: rotate(45deg);
}

/* Running head: tracked caps pinned to the rail's left edge, level with the dots.
   Warm white at 0.6 is ~8:1 — real text, so it clears the text floor, while staying
   quieter than anything on the slide. Absolute, so the dot strip stays centered on
   the slide rather than shifting right by the label's width. */
.section-rail .running-head {
  position: absolute;
  left: 3.5rem;
  bottom: 1.15rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(245, 244, 239, 0.6);
}

/* Hit area larger than the dot, so a dot is clickable without precision aiming.
   -9.5px, not -8px: 5px + 2×8 was 21px, under the 24px WCAG 2.5.8 minimum. This
   lands exactly on 24px, which is also the dot pitch above — so targets tile
   without overlapping. */
.section-rail button::before {
  content: "";
  position: absolute;
  inset: -9.5px;
}

/* Tooltip. Native `title` waits about a second before appearing, which is too slow
   when jumping slides mid-talk. */
.section-rail button::after {
  content: attr(data-title);
  position: absolute;
  bottom: 1.4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35rem 0.6rem;
  border-radius: 0.3rem;
  background: var(--ofc-ink);
  color: var(--ofc-ground);
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.section-rail button:hover::after,
.section-rail button:focus-visible::after {
  opacity: 1;
}

.section-rail button:focus-visible {
  outline: 2px solid var(--ofc-accent);
  outline-offset: 3px;
}
</style>
