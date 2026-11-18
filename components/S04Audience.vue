<template>
  <div class="wrap">
    <SlideHead kicker="Who is this for?" title="Target Audience" />

    <div class="card he rt-card" style="left: 976px; --d: 250" dir="rtl" lang="he">
      <p class="t">צד א׳ | סטודנטים לעיצוב</p>
      <p class="bx">
        נדרשים להתמודד עם מגוון רחב של אפשרויות הדפסה, חומרים, גימורים ודרישות טכניות שלא תמיד מוכרות להם. הקושי בהבנת האפשרויות, בהשוואת מחירים ובהכנת קבצים תקינים מקשה על קבלת החלטות, ולרוב מוביל לטעויות ולהדפסות חוזרות.
      </p>
    </div>
    <div class="card he rt-card" style="left: 451px; --d: 450" dir="rtl" lang="he">
      <p class="t">צד ב׳ | בתי דפוס</p>
      <p class="bx">
        מתמודדים עם פניות רבות הדורשות הסברים טכניים, בירור צרכים ותיקון קבצים שאינם עומדים בדרישות הייצור. הזמנות קטנות ונפרדות מצריכות התנהלות חוזרת מול לקוחות שונים, גם כאשר מדובר בעבודות בעלות מאפיינים דומים.
      </p>
    </div>

    <div class="cut wu" style="--d: 900" />
    <div class="scissors"><img class="p" src="/assets/scissors-v.svg" alt="" style="--d: 600" /></div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.card {
  position: absolute;
  top: 420px;
  width: 492px;
  padding: 40px;
  background: #f7f7f7;
  border-radius: 4px;
  animation: u-rise 1s var(--ease) both;
  animation-delay: calc(var(--d) * 0.85ms + 100ms);
}
.t { font-weight: 800; font-size: 24px; line-height: 36px; letter-spacing: -0.48px; margin-bottom: 8px !important; }
.bx { font-size: 20px; line-height: 32px; letter-spacing: -0.4px; }
/* the dashed "cut here" line, then the scissors that made it */
.cut {
  position: absolute;
  left: 959px;
  top: 409px;
  width: 0;
  height: 306px;
  border-left: 1px dashed #6a6a6a;
}
.scissors {
  position: absolute;
  left: 944px;
  top: 697px;
  width: 32px;
  height: 32px;
  transform: rotate(-90deg);
}
.scissors img { width: 32px; height: 32px; display: block; }
</style>
