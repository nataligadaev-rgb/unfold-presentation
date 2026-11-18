<script setup lang="ts">
type Q = 'says' | 'thinks' | 'does' | 'feels'
const props = defineProps<{
  kicker: string
  title: string
  photo: string
  /** background-size / position that crop the portrait into the 175px circle */
  photoSize: string
  photoPos: string
  notes: { x: number; y: number; q: Q; t: string }[]
}>()

const fill: Record<Q, string> = { says: '#e0fac2', thinks: '#c0c9ff', does: '#c0efff', feels: '#ffd8f3' }
// reading order: Says → Thinks → Does → Feels. Each quadrant settles in as one small group,
// its notes only a beat apart, so it reads as a calm sweep rather than stickers popping at random.
const wave: Record<Q, number> = { says: 900, thinks: 1700, does: 2500, feels: 3300 }
const order = (n: { x: number; y: number; q: Q }, i: number) => {
  const k = props.notes.slice(0, i).filter((m) => m.q === n.q).length
  return wave[n.q] + k * 110
}
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead :kicker="kicker" :title="title" crumb />

    <div class="vline" />
    <div class="hline" />

    <img class="dring" src="/assets/ring.png" alt="" />
    <div class="face p" style="--d: 420" :style="{ backgroundImage: `url(${photo})`, backgroundSize: photoSize, backgroundPosition: photoPos }" />

    <p class="lab says f" style="--d: 700">Says</p>
    <p class="lab thinks f" style="--d: 1500">Thinks</p>
    <p class="lab feels f" style="--d: 3100">Feels</p>
    <p class="lab does f" style="--d: 2300">Does</p>

    <div
      v-for="(n, i) in notes"
      :key="i"
      class="note r"
      dir="rtl"
      :style="{ left: n.x + 'px', top: n.y + 'px', background: fill[n.q], '--d': order(n, i) }"
    >
      <span>{{ n.t }}</span>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.vline { position: absolute; left: 960px; top: 242px; height: 656px; border-left: 1px dashed #b5b5b5; }
.hline { position: absolute; left: 398px; top: 570px; width: 1124px; border-top: 1px dashed #b5b5b5; }
.dring { position: absolute; left: 864px; top: 474px; width: 191px; height: 191px; }
.face { position: absolute; left: 872px; top: 482px; width: 175px; height: 175px; border-radius: 50%; background-repeat: no-repeat; }
.lab { position: absolute; font: italic 300 24px/44px 'Saans', 'Heebo', sans-serif; letter-spacing: -0.48px; color: #9b9b9b; }
.says { right: calc(1920px - 872px); top: 482px; }
.does { right: calc(1920px - 878px); top: 648px; }
.thinks { left: 1047px; top: 482px; }
.feels { left: 1047px; top: 648px; }
.note {
  position: absolute;
  width: 120px;
  height: 120px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  letter-spacing: -0.56px;
  color: #222;
}
</style>
