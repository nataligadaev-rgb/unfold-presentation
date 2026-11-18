<script setup lang="ts">
const stu = ['עובדים בתוכנות עיצוב', 'סוגרים קבצים לדפוס לפני השליחה לבית דפוס', 'כותבים מייל עם פרטי הפורמט להדפסה', 'פינג פונג של תיקונים מול בעל המקצוע', 'חוששים מהסכום הסופי']
const shop = ['מדברים בשפה המקצועית של התחום', 'תקשורת קצרה ותחליטית מול הלקוח', 'מעדיפים לקבל מסמכים מוכנים ותקינים להדפסה', 'מעדיפים לקבל טווח זמן מספק להכנת ההזמנה', 'מעדיפים שיעדכנו מראש לפני שבאים']
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Familiarity" title="Patterns & Conventions" />

    <div class="card c1 r" dir="rtl" style="--d: 300">
      <p class="hd">סטודנטים לעיצוב</p>
      <p v-for="(t, i) in stu" :key="i">{{ t }}</p>
    </div>
    <div class="card c2 r" dir="rtl" style="--d: 600">
      <p class="hd">בתי דפוס</p>
      <p v-for="(t, i) in shop" :key="i">{{ t }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.card { position: absolute; top: 418px; width: 525px; padding: 20px; background: #f7f7f7; border-radius: 4px; font-size: 20px; line-height: 32px; letter-spacing: -0.4px; }
.hd { font-weight: 700; font-size: 16px; line-height: 36px; letter-spacing: -0.32px; margin-bottom: 8px !important; }
.c1 { left: 968px; }
.c2 { left: 426px; }
</style>
