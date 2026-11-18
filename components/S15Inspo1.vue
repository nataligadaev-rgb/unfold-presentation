<script setup lang="ts">
import type { Tile } from './inspo'
const tiles: Tile[] = [
  { x: 168, y: 149, w: 448, h: 202, src: 'i15-105.png', cap: 'inspo pics, printing options, creating design within platform', capX: 173, capY: 387, capW: 443 },
  { x: 656, y: 151, w: 271, h: 200, src: 'i15-106.png', img: { left: '0', top: '-0.01%', width: '199.55%', height: '100.03%' }, cap: 'templates layout\n/presets', capX: 656, capY: 387, capW: 271 },
  { x: 967, y: 149, w: 422, h: 202, src: 'i15-110.png', cap: 'mockups\n3D rendering before print', capX: 967, capY: 387, capW: 422 },
  { x: 1429, y: 149, w: 323, h: 202, src: 'i15-118.png', img: { left: '-0.02%', top: '0', width: '100.03%', height: '106.38%' }, cap: 'הוספת תגובות/הערות\nבצורה נקודתית', capX: 1429, capY: 387, capW: 323 },
  { x: 168, y: 536, w: 448, h: 272, src: 'i15-109.png', cap: 'a good way to organize workspace for\nprint employee', capX: 168, capY: 844, capW: 448 },
  { x: 656, y: 536, w: 360, h: 272, src: 'i15-111.png', cap: 'combines request with the open file visual, co-working space', capX: 656, capY: 844, capW: 360 },
  { x: 1056, y: 536, w: 333, h: 272, src: 'i15-108.png', cap: 'chat reference- turning messy requests into formal text', capX: 1056, capY: 844, capW: 333 },
  { x: 1429, y: 536, w: 323, h: 272, src: 'i15-119.png', img: { left: '-17.34%', top: '-3.36%', width: '134.67%', height: '106.72%' }, cap: 'השוואת אופציות קיימות בין מספר אפשרויות / השוואת מחירים', capX: 1429, capY: 844, capW: 323 },
]
</script>

<template>
  <InspoGrid :tiles="tiles" />
</template>
