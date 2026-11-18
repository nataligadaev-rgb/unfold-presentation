<script setup lang="ts">
// right = distance of the column's right edge from the slide's right edge
const stats = [
  { n: 50, dec: 0, t: 'מהקבצים דורשים הכנה נוספת לדפוס', s: 'NAPCO Research, 2021', right: 155, y: 331, w: 409 },
  { n: 20.2, dec: 1, t: 'מבתי הדפוס דיווחו על הדפסות חוזרות', s: 'PRINTING United Alliance, 2024', right: 620, y: 331, w: 443 },
  { n: 50, dec: 0, t: 'מהסטודנטים פנו לצוות לעזרה בהדפסה ומחשוב', s: 'Emily Carr University of Art + Design, 2023', right: 1132, y: 331, w: 517 },
  { n: 37, dec: 0, t: 'ציינו שהתוצר הסופי לא עמד בציפיותיהם', s: 'NAPCO, 2022', right: 156, y: 671, w: 460 },
  { n: 47, dec: 0, t: 'מההזמנות התעכבו עקב מפרט או קובץ לא תקין', s: 'Hightech Grafix, 2025', right: 635, y: 671, w: 530 },
]
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Research & Statistics" title="Data Collection" />

    <div v-for="(s, i) in stats" :key="i" class="st" :style="{ right: s.right + 'px', top: s.y + 'px', width: s.w + 'px' }" dir="rtl">
      <p class="n r" :style="{ '--d': 250 + i * 160 }"><CountUp :to="s.n" :decimals="s.dec" suffix="%" :delay="250 + i * 100" :duration="1700 - (250 + i * 100)" /></p>
      <p class="t r" :style="{ '--d': 400 + i * 160 }">{{ s.t }}</p>
      <p class="s r" :style="{ '--d': 500 + i * 160 }" dir="ltr">{{ s.s }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.st { position: absolute; }
.n { font: 500 64px/44px 'Inter Tight', sans-serif; letter-spacing: -1.92px; color: #06aef0; height: 69px; text-align: right; }
.t { font-weight: 600; font-size: 24px; line-height: 32px; letter-spacing: -0.48px; margin-top: 10px !important; }
.s { font-size: 20px; line-height: 32px; letter-spacing: -0.4px; color: #9b9b9b; text-align: right; margin-top: 12px !important; }
</style>
