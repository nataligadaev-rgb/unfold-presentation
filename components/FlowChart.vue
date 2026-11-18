<script setup lang="ts">
// Absolute-positioned flow chart, in 1920×1080 slide pixels.
// Motion: boxes ease in one by one along the flow; each connector then draws itself in its own
// direction (start → end), so the eye is led through the chart instead of things popping at random.
defineProps<{
  kicker: string
  title: string
  nodes: { id: string; x: number; y: number; text: string; at: number; grey?: boolean }[]
  /** dashed connectors; each path is written start → end in flow direction */
  lines: { d: string; at: number }[]
  diamond: { x: number; y: number; at: number }
  tags: { x: number; y: number; t: 'yes' | 'no'; at: number }[]
}>()

// the authored `at` values are in ms on a slow timeline; play it at this speed
const K = 0.7
const t = (n: number) => Math.round(n * K)
const uid = Math.random().toString(36).slice(2, 8)
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead :kicker="kicker" :title="title" />

    <svg class="lines" viewBox="0 0 1920 1080" width="1920" height="1080">
      <defs>
        <!-- a solid stroke that grows along the path reveals the dashed path underneath -->
        <mask v-for="(l, i) in lines" :id="`m-${uid}-${i}`" :key="i" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080">
          <path :d="l.d" pathLength="1" class="grow" :style="{ animationDelay: t(l.at) + 80 + 'ms' }" />
        </mask>
      </defs>
      <path v-for="(l, i) in lines" :key="i" :d="l.d" class="ln" :mask="`url(#m-${uid}-${i})`" />
    </svg>

    <div v-for="n in nodes" :key="n.id" class="node ent" :class="{ grey: n.grey }" :style="{ left: n.x + 'px', top: n.y + 'px', animationDelay: t(n.at) + 80 + 'ms' }" dir="rtl">
      <span v-html="n.text.replace('\n', '<br>')" />
    </div>

    <div class="dia" :style="{ left: diamond.x + 'px', top: diamond.y + 'px' }">
      <i class="sq ent" :style="{ animationDelay: t(diamond.at) + 80 + 'ms' }" />
      <p class="ent" dir="rtl" :style="{ animationDelay: t(diamond.at) + 80 + 'ms' }">האם הקובץ<br />מוכן להדפסה?</p>
    </div>

    <p v-for="(g, i) in tags" :key="i" class="tag ent" :class="g.t" :style="{ left: g.x + 'px', top: g.y + 'px', animationDelay: t(g.at) + 80 + 'ms' }" dir="rtl">
      {{ g.t === 'yes' ? 'כן' : 'לא' }}
    </p>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.lines { position: absolute; left: 0; top: 0; pointer-events: none; }
.ln { fill: none; stroke: #4a4a4a; stroke-width: 1; stroke-dasharray: 4 4; }
.grow { fill: none; stroke: #fff; stroke-width: 6; stroke-dasharray: 1; stroke-dashoffset: 1; animation: grow-line 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
@keyframes grow-line { to { stroke-dashoffset: 0; } }

/* one calm entrance for every box: fade + a tiny settle, no scaling */
.ent { opacity: 0; animation: flow-in 0.9s var(--ease) forwards; }
@keyframes flow-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@media print, (prefers-reduced-motion: reduce) {
  .ent { animation: none; opacity: 1; }
  .grow { animation: none; stroke-dashoffset: 0; }
}

.node {
  position: absolute;
  width: 187px;
  height: 96px;
  padding: 12px;
  background: #d1c8ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.64px;
  color: #000;
}
.node.grey { background: #d9d9d9; }
.dia { position: absolute; width: 211.45px; height: 211.45px; display: flex; align-items: center; justify-content: center; }
.sqw { display: none; }
.sq { position: absolute; width: 149.5px; height: 149.5px; background: #cee8fc; border-radius: 4px; rotate: -45deg; }
.dia p { position: relative; width: 163px; text-align: center; font-size: 16px; letter-spacing: -0.64px; line-height: normal; }
.tag { position: absolute; padding: 0 6px; height: 25px; min-width: 26px; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 16px; letter-spacing: -0.64px; }
.tag.yes { background: #e0fac2; }
.tag.no { background: #fac2c2; }
</style>
