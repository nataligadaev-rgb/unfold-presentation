<script setup lang="ts">
import type { Tile } from './inspo'
const tiles: Tile[] = [
  { x: 150, y: 134, w: 448, h: 250, src: 'i16-113.png', cap: 'monitoring requests, files,\nprinter availability', capX: 150, capY: 420, capW: 448 },
  { x: 638, y: 134, w: 410, h: 250, src: 'i16-120.png', img: { left: '0', top: '-0.11%', width: '100%', height: '119.23%' }, cap: 'ניהול תורים, לוחות זמנים, דדליינים\nאישיים לכל עבודה/סטודנט', capX: 638, capY: 420, capW: 410 },
  { x: 1088, y: 134, w: 400, h: 250, src: 'i16-121.png', img: { left: '0', top: '0.05%', width: '100%', height: '106.67%' }, cap: 'דאשבורד משימות\nריכוז קבצים / שיחות פתוחות', capX: 1088, capY: 420, capW: 400 },
  { x: 1528, y: 134, w: 114, h: 245, src: 'i16-83.png', img: { left: '-0.05%', top: '0', width: '99.84%', height: '105.59%' }, cap: 'מעקב מחוץ למערכת\nלגביי סטטוס הזמנה', capX: 1528, capY: 420, capW: 242 },
  { x: 1654, y: 134, w: 116, h: 245, src: 'i16-122.png', img: { left: '0', top: '-0.11%', width: '100%', height: '107.46%' }, cap: '', capX: 0, capY: 0, capW: 0 },
  { x: 150, y: 567, w: 191, h: 249, src: 'i16-128.png', img: { left: '-56.06%', top: '0', width: '208.35%', height: '106.24%' }, cap: 'המערכת בודקת את המסמך', capX: 150, capY: 847, capW: 415 },
  { x: 369, y: 567, w: 196, h: 249, src: 'i16-125.png', img: { left: '-102.07%', top: '-25.48%', width: '304.38%', height: '160.21%' }, cap: '', capX: 0, capY: 0, capW: 0 },
  { x: 605, y: 567, w: 401, h: 249, src: 'i16-126.png', img: { left: '0', top: '0', width: '100%', height: '106.74%' }, cap: 'פריסת פרוייקטים מסודרים לתקיות\nמוכר ונגיד layout', capX: 605, capY: 847, capW: 401 },
  { x: 1059, y: 567, w: 332, h: 249, src: 'i16-9730.png', cap: 'חלל עבודה\nלשינויים בקובץ', capX: 1059, capY: 847, capW: 332 },
  { x: 1437, y: 567, w: 333, h: 249, src: 'i16-9731.png', cap: 'אזור לכתיבת הערות\nוקריאת השתלשלות שיחה', capX: 1437, capY: 847, capW: 333 },
]
</script>

<template>
  <InspoGrid :tiles="tiles.map((t) => ({ ...t }))" />
</template>
