<script setup lang="ts">
import { col1, col2, col3 } from './competitors'
const cols = [col1, col2, col3]
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="What's out there" title="Competitor Analysis" />

    <div class="cols">
      <div v-for="(col, ci) in cols" :key="ci" class="col">
        <CompItem
          v-for="(c, i) in col"
          :key="c.name"
          :c="c"
          class="r"
          :style="{ '--d': 250 + ci * 250 }"
        />
      </div>
    </div>

    <div class="note" dir="rtl">
      <p class="r" style="--d: 700">
        הפתרונות הקיימים מתמקדים בעיקר בצרכים נקודתיים של הלקוח או בית הדפוס, ואינם מספקים מענה משולב או ליווי לתהליך העבודה המשותף ביניהם.
      </p>
      <p class="r" style="--d: 900">
        מרבית הפתרונות שנבחנו פונים לשוק הבינלאומי, בעוד שהפתרונות הקיימים בישראל מציעים מענה נקודתי, ללא מעטפת רחבה המותאמת לצרכים הייחודיים של סטודנטים לעיצוב ובתי דפוס ולתהליך העבודה המשותף ביניהם.
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.cols { position: absolute; left: 120px; top: 328px; display: flex; gap: 80px; }
.col { display: flex; flex-direction: column; gap: 40px; }
.note { position: absolute; right: 116px; top: 330px; width: 540px; font-size: 24px; line-height: 32px; letter-spacing: -0.48px; }
.note p + p { margin-top: 32px !important; }
</style>
