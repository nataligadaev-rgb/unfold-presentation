<script setup lang="ts">
// Node and connector coordinates are straight from Figma. `at` = when each piece lands, in flow order.
const nodes = [
  { id: 'a', x: 1582, y: 233, text: 'התחלה / שליחת\nבקשת הדפסה', grey: true, at: 250 },
  { id: 'b', x: 1582, y: 363, text: 'בחירת סוג ההדפסה', at: 480 },
  { id: 'c', x: 1582, y: 493, text: 'העלאת קובץ ', at: 710 },
  { id: 'd', x: 1361, y: 493, text: 'קבלת משוב על הקובץ והנחיות להדפסה', at: 940 },
  { id: 'e', x: 815, y: 493, text: 'בחירת בית דפוס בהתאם לצרכים ולמחירים', at: 1400 },
  { id: 'f', x: 594, y: 493, text: 'סקירת האפשרויות והמחירים', at: 1630 },
  { id: 'g', x: 373, y: 493, text: 'שליחת בקשת הדפסה', at: 1860 },
  { id: 'h', x: 152, y: 493, text: 'מעקב אחר ההזמנה וקבלת הודעה כשהיא מוכנה לאיסוף', at: 2090 },
  { id: 'i', x: 1128, y: 761, text: 'בקשת תיקונים', at: 1900 },
  { id: 'j', x: 907, y: 761, text: 'העלאת קובץ מתוקן', at: 2130 },
]
const lines = [
  { d: 'M1675.5 329 V363', at: 420 },
  { d: 'M1675.5 459 V493', at: 650 },
  { d: 'M1582 541 H1548', at: 880 },
  { d: 'M1361 541 H1327', at: 1110 },
  { d: 'M1117 541 H1002', at: 1340 },
  { d: 'M815 541 H781', at: 1570 },
  { d: 'M594 541 H560', at: 1800 },
  { d: 'M373 541 H339', at: 2030 },
  { d: 'M1222.5 646 V761', at: 1700 },
  { d: 'M1128 809 H1094', at: 2070 },
  { d: 'M1000.5 857 V915.5 H1461.5 V589', at: 2300 },
]
const tags = [
  { x: 1047, y: 528, t: 'yes' as const, at: 1300 },
  { x: 1209, y: 690.5, t: 'no' as const, at: 1650 },
]
</script>

<template>
  <FlowChart kicker="Mapping" title="User Flow / Students" :nodes="nodes" :lines="lines" :diamond="{ x: 1116, y: 435, at: 1170 }" :tags="tags" />
</template>
