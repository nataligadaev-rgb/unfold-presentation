<script setup lang="ts">
const nodes = [
  { id: 'a', x: 1624, y: 461, text: 'סביבת עבודה /\nבקשות נכנסות', grey: true, at: 250 },
  { id: 'b', x: 1387, y: 461, text: 'פתיחת בקשת הדפסה', at: 480 },
  { id: 'c', x: 1150, y: 461, text: 'בדיקת הקובץ\nומפרט ההדפסה', at: 710 },
  { id: 'd', x: 587, y: 460, text: 'אישור מחיר\nומועד סיום משוער', at: 1400 },
  { id: 'e', x: 350, y: 461, text: 'עדכון סטטוס הייצור', at: 1630 },
  { id: 'f', x: 113, y: 461, text: 'סימון ההזמנה\nכמוכנה לאיסוף', at: 1860 },
  { id: 'g', x: 587, y: 624, text: 'בקשת תיקונים', at: 1700 },
  { id: 'h', x: 350, y: 624, text: 'הסטודנט מעלה\nקובץ מתוקן', at: 1930 },
]
const lines = [
  { d: 'M1624 509 H1574', at: 420 },
  { d: 'M1387 509 H1337', at: 650 },
  { d: 'M1150 509 H1100', at: 880 },
  { d: 'M889 509 H774', at: 1340 },
  { d: 'M587 509 H537', at: 1570 },
  { d: 'M350 509 H300', at: 1800 },
  { d: 'M994.7 614.4 V672 H774', at: 1640 },
  { d: 'M587 672 H537', at: 1870 },
  { d: 'M461.5 720 V777 H1240 V557', at: 2150 },
]
const tags = [
  { x: 819, y: 496, t: 'yes' as const, at: 1300 },
  { x: 819, y: 658, t: 'no' as const, at: 1600 },
]
</script>

<template>
  <FlowChart kicker="Mapping" title="User Flow / Printshop" :nodes="nodes" :lines="lines" :diamond="{ x: 889, y: 403, at: 1000 }" :tags="tags" />
</template>
