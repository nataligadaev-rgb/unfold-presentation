<template>
  <div class="wrap">
    <SlideHead kicker="What are we dealing with?" title="The Problem" />

    <div class="box r he" style="--d: 300" dir="rtl" lang="he">
      <p>
        תהליך ההפקה של פרויקטיי עיצוב מלווה לא פעם בחוסר ודאות ובפערי ידע בין סטודנטים לבתי דפוס. סטודנטים מתקשים להבין מה ניתן להפיק, מהן האפשרויות העומדות בפניהם וכיצד תיראה התוצאה הסופית. מנגד, בתי הדפוס נדרשים להתמודד עם בקשות לא מגובשות, להסביר מגבלות ייצור ולהנחות בתיקון קבצים. הפער בין הציפיות ליכולות הייצור יוצר תסכול, התנהלות מסורבלת ועיכובים לשני הצדדים.
      </p>
    </div>

    <CropMark at="tl" :x="410" :y="448" :delay="800" />
    <CropMark at="br" :x="1488" :y="677" :delay="900" />
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.box {
  position: absolute;
  left: 431px;
  top: 469px;
  width: 1057px;
  padding: 40px;
  background: #f7f7f7;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.48px;
}
</style>
