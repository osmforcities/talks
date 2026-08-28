<script setup lang="ts">
/**
 * A window onto one high-resolution screenshot.
 *
 * Give it a crop in *source viewport* coordinates — the same numbers
 * getBoundingClientRect() reports in the browser you captured from — and it
 * sizes and offsets the image so that crop fills the slide. Consecutive slides
 * that use the same `name` are morphed into each other by the View Transitions
 * API, so advancing the deck pans and zooms across the screenshot instead of
 * cutting between separate images.
 *
 * The maths lives here rather than in each slide so a crop can be re-aimed by
 * editing four numbers, and so nothing has to be recomputed by hand when the
 * screenshot is retaken at a different size.
 */
const props = withDefaults(
  defineProps<{
    src: string
    /** Crop rect, in the coordinates of the viewport that was captured. */
    x?: number
    y?: number
    w?: number
    h?: number
    /** Size of the viewport the screenshot was taken at. */
    vw?: number
    vh?: number
    /** Frame the image renders into. Defaults to the deck's figure frame. */
    cw?: number
    ch?: number
    /** Set the same name on consecutive slides to morph between crops. Off by
     *  default: the morph flashed the whole screen (dropped 2026-08-23). */
    name?: string
  }>(),
  // 880x550: the framed-figure box (see .shot below). Same 1.6 aspect as the
  // 1600x1000 captures, so a full-view shot fills the frame exactly. Author
  // zoom crops at (or near) 1.6 so they fill it too — a small mismatch shows
  // as symmetric white matting inside the frame, which is fine; a wild one
  // wastes the frame.
  { x: 0, y: 0, vw: 1600, vh: 1000, cw: 880, ch: 550, name: '' },
)

// `contain`, not `cover`: a crop is aimed at something specific, and cover
// would silently clip the edge you were aiming at.
const scale = () => {
  const w = props.w ?? props.vw
  const h = props.h ?? props.vh
  return Math.min(props.cw / w, props.ch / h)
}

const style = () => {
  const s = scale()
  const w = props.w ?? props.vw
  const h = props.h ?? props.vh
  return {
    width: `${props.vw * s}px`,
    left: `${-props.x * s + (props.cw - w * s) / 2}px`,
    top: `${-props.y * s + (props.ch - h * s) / 2}px`,
    viewTransitionName: props.name,
  }
}
</script>

<template>
  <div class="shot">
    <img :src="src" :style="style()" alt="" />
  </div>
</template>

<style scoped>
.shot {
  position: absolute;
  /* The framed figure: an 880x550 box on the 1280x720 canvas — 200px side
     margins, 60px above, 110px below (a caption line plus the progress rail's
     band, which content never enters). Keep in sync with the cw/ch defaults
     above. */
  inset: 60px 200px 110px 200px;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--ofc-line);
}

.shot img {
  position: absolute;
  max-width: none;
  image-rendering: auto;
}
</style>
