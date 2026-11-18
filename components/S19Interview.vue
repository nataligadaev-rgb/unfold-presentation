<script setup lang="ts">
const stuQ = [
  'האם תוכל/י לתאר לנו את החוויה האחרונה שלך בהדפסת פרויקט, משלב הכנת הקובץ ועד לקבלת המוצר הסופי?',
  'איך את/ה בדרך כלל בוחר/ת בית דפוס? אילו גורמים משפיעים על הבחירה שלך?',
  'איך את/ה בדרך כלל מתקשר/ת עם בתי דפוס? (וואטסאפ, מייל, טלפון, הגעה פיזית וכו׳) איך הייתה החוויה שלך?',
  'האם קרה לך שהייתה טעות או אי-הבנה במהלך הדפסת פרויקט? מה קרה ואיך פתרת את הבעיה?',
  'איזה חלק בתהליך הכנת הקובץ או שליחת הפרויקט להדפסה הכי מבלבל או מתסכל אותך?',
  'אם היית יכול/ה לשנות דבר אחד בחוויית העבודה שלך מול בתי דפוס, מה היית משנה?',
]
const shopQ = [
  'האם תוכל לתאר לנו איך מתבצעת הזמנת הדפסה טיפוסית, מהרגע שלקוח פונה אליך ועד שהמוצר הסופי מוכן?',
  'איך לקוחות בדרך כלל מתקשרים איתך? (וואטסאפ, מייל, טלפון, הגעה פיזית וכו׳) מה עובד טוב ומה פחות?',
  'מהן הטעויות או אי-ההבנות הנפוצות ביותר של לקוחות בעת שליחת עבודות להדפסה?',
  'איך אתה מתמודד עם מצב שבו קובץ של לקוח אינו מוכן להדפסה? אילו צעדים אתה נוקט כדי לפתור את הבעיה?',
  'האם יש שאלות או בקשות שחוזרות על עצמן וגוזלות ממך זמן רב?',
  'אם היית יכול לשפר דבר אחד בתהליך התקשורת עם הלקוחות, מה היית משנה ולמה?',
  'כמה פריטים אתה מדפיס בממוצע ביום?',
]
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Understanding the needs" title="Interview Questions" />

    <div class="who w1 r" dir="rtl" style="--d: 300">
      <p class="bx">את מי נראיין?</p>
      <p>מעין לונברג- סטודנטית ברב תחומי, שנקר</p>
      <p>נועה פוטר- סטודנטית שנה ב׳, HIT</p>
      <p>אתכם :)</p>
    </div>
    <div class="who w2 r" dir="rtl" style="--d: 700">
      <p class="bx">את מי נראיין?</p>
      <p>עובדי קובי רן / Y פרינט / ע.ר. הדפסות (נשכנע אותם)</p>
      <p>ענבר קריספין - עובדת בבית דפוס, בעלת ניסיון במגוון בתי דפוס מסחריים.</p>
      <p>לאה מנדל - בעלת ניסיון רב שנים בתחום הדפוס ובהפקת פרויקטים מגוונים.</p>
    </div>

    <div class="box b1 r" dir="rtl" style="--d: 400">
      <p class="hd">שאלות לסטודנטים לעיצוב</p>
      <ul><li v-for="(q, i) in stuQ" :key="i">{{ q }}</li></ul>
    </div>
    <div class="box b2 r" dir="rtl" style="--d: 800">
      <p class="hd">שאלות לעובד/ת בבית דפוס</p>
      <ul><li v-for="(q, i) in shopQ" :key="i">{{ q }}</li></ul>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.who { position: absolute; right: 1150px; font-size: 20px; line-height: 32px; letter-spacing: -0.4px; white-space: nowrap; }
.who .bx { font-weight: 700; }
.w1 { top: 391px; }
.w2 { top: 725px; }
.box { position: absolute; left: 803px; width: 1001px; padding: 20px; background: #f7f7f7; border-radius: 4px; }
.b1 { top: 263px; }
.b2 { top: 565px; }
.hd { font-weight: 800; font-size: 16px; line-height: 36px; letter-spacing: -0.32px; margin-bottom: 8px !important; }
.box li { position: relative; padding-inline-start: 30px; font-size: 20px; line-height: 32px; letter-spacing: -0.4px; }
.box li::before { content: '•'; position: absolute; inset-inline-start: 8px; }
</style>
