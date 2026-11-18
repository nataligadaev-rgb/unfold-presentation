<script setup lang="ts">
// [bold lead, rest]
const shops: [string, string][] = [
  ['שיעור קבצים תקינים-', ' אחוז הקבצים המתקבלים מוכנים להדפסה.'],
  ['יעילות התקשורת-', ' מספר ההבהרות הנדרשות מול הלקוח לכל הזמנה.'],
  ['חיסכון בזמן-', ' צמצום הזמן המושקע במשימות חוזרות ובהכנת הזמנות.'],
  ['שימור לקוחות-', ' אחוז הלקוחות שחוזרים לבצע הזמנות נוספות.'],
  ['ייעול תהליך הייצור-', ' ריכוז הזמנות דומות להדפסה משותפת וחסכונית.'],
  ['צמיחה עסקית-', ' גידול במספר הלקוחות החדשים וההזמנות המגיעות דרך הפלטפורמה.'],
]
const students: [string, string][] = [
  ['מציאת פתרון הדפסה מתאים-', ' התאמה לצרכים העיצוביים ולתקציב.'],
  ['ביטחון בתהליך ההזמנה-', ' תחושת ביטחון בשליחת קבצים להדפסה.'],
  ['צמצום התקשורת מול בית הדפוס-', ' פחות שאלות, הבהרות ותיקונים.'],
  ['חיסכון בזמן ובכסף-', ' קיצור תהליך החיפוש, ההכנה וההזמנה.'],
  ['שביעות רצון מהתוצאה-', ' התאמת התוצר המודפס לציפיות.'],
  ['ביצוע הזמנה באופן עצמאי-', ' השלמת הזמנה ללא עזרה חיצונית.'],
]
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Setting the goals" title="Success Metrics" />

    <div class="lead r" dir="rtl" style="--d: 250">
      <p>הצלחה עבורנו היא ליצור פלטפורמה שיוצרת תהליך שבו סטודנטים מרגישים ביטחון לממש את הרעיונות שלהם,</p>
      <p>ובתי הדפוס מרגישים שליטה בתהליך העבודה- מתוך אמון הדדי, תקשורת ברורה ושיתוף פעולה שמועיל לשני הצדדים.</p>
    </div>

    <p class="ab f" style="left: 188px; --d: 500">01 - Artboard</p>
    <p class="ab f" style="left: 975px; --d: 650">02 - Artboard</p>

    <div class="card r" style="left: 188px; --d: 550" dir="rtl">
      <p class="who">בתי הדפוס</p>
      <p v-for="(l, i) in shops" :key="i" class="ln"><b>{{ l[0] }}</b>{{ l[1] }}</p>
    </div>
    <div class="card r" style="left: 975px; --d: 700" dir="rtl">
      <p class="who">סטודנטים לעיצוב</p>
      <p v-for="(l, i) in students" :key="i" class="ln"><b>{{ l[0] }}</b>{{ l[1] }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.lead { position: absolute; right: 209px; top: 333px; width: 1249px; font-weight: 700; font-size: 24px; line-height: 32px; letter-spacing: -0.48px; }
.ab { position: absolute; top: 497px; font: 600 16px/44px 'Instrument Sans', sans-serif; color: #a9a9a9; letter-spacing: -0.32px; }
.card { position: absolute; top: 543px; width: 756px; padding: 20px; background: #f7f7f7; border-radius: 4px; }
.who { font-size: 16px; line-height: 36px; letter-spacing: -0.32px; margin-bottom: 8px !important; }
.ln { font-size: 20px; line-height: 32px; letter-spacing: -0.4px; }
.ln b { font-weight: 700; }
</style>
