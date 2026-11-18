<script setup lang="ts">
import { shops, students } from './hmwData'

// x positions of the five columns, right to left (as laid out in Figma)
const xs = [1326, 1066, 807, 547, 287]
const rows = [
  { label: 'סטודנטים לעיצוב', labelTop: 279, sitY: 279, oppY: 417, data: students, fill: '#dee3ff', base: 350 },
  { label: 'בתי דפוס', labelTop: 621, sitY: 621, oppY: 759, data: shops, fill: '#c0efff', base: 1000 },
]
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Opportunities" title="HMW’s" />

    <template v-for="row in rows" :key="row.label">
      <p class="rowlab r" dir="rtl" :style="{ top: row.labelTop + 'px', '--d': row.base - 100 }">{{ row.label }}</p>
      <template v-for="(p, i) in row.data" :key="i">
        <div
          class="n sit r"
          dir="rtl"
          :style="{ left: xs[i] + 'px', top: row.sitY + 'px', '--d': row.base }"
        >
          <b>הסיטאוציה</b>
          <span>{{ p.sit }}</span>
        </div>
        <div
          class="n opp r"
          dir="rtl"
          :style="{ left: xs[i] + 'px', top: row.oppY + 'px', background: row.fill, '--d': row.base + 250 }"
        >
          <b>ההזדמנות</b>
          <span>{{ p.hmw }}</span>
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.rowlab {
  position: absolute;
  right: calc(1920px - 1743px);
  width: 138px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.48px;
}
.n {
  position: absolute;
  width: 240px;
  height: 118px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #222;
}
.sit { border: 1px solid #ede9ff; background: #fff; }
.n b { font-size: 12px; font-weight: 700; letter-spacing: -0.48px; }
.n span { font-size: 14px; letter-spacing: -0.56px; line-height: normal; }
</style>
