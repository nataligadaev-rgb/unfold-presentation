<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Introducing" title="Our Vision" />

    <div class="box r" dir="rtl" style="--d: 250">
      <p class="lead">
        פלטפורמה המחברת בין סטודנטים לעיצוב לבתי דפוס, במטרה ליצור תהליך הדפסה פשוט, נגיש ויעיל יותר עבור שני הצדדים.
      </p>
      <p>
        עבור הסטודנטים, הפלטפורמה מאפשרת להכיר מגוון שירותי הדפסה, להשוות בין אפשרויות בהתאם לצרכים ולתקציב, להכין קבצים המותאמים לדרישות הייצור ולהתאגד עם סטודנטים נוספים בעלי צורכי הדפסה דומים, במטרה להוזיל עלויות ולפשט את התהליך.
      </p>
      <p>
        עבור בתי הדפוס, הפלטפורמה מאפשרת להרחיב את החשיפה לשירותים וליכולות הייצור שלהם, להגיע ללקוחות חדשים, לקבל קבצים תקינים ומוכנים להדפסה ולנהל הזמנות בצורה מסודרת. בנוסף, היא מאפשרת לרכז הזמנות בעלות מאפיינים דומים, לצמצם תקשורת חוזרת וטעויות טכניות ולשפר את ניצול הזמן והמשאבים.
      </p>
      <p>
        המטרה היא ליצור מערכת עבודה משותפת המגשרת על פערי הידע והתקשורת בין הצדדים, וחוסכת זמן וכסף לשני הצדדים.
      </p>
    </div>

    <SelectionBox :x="278" :y="329" :w="1355" :h="456" :delay="1300" />
    <img class="cursor" src="/assets/cursor.png" alt="" />
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.box {
  position: absolute;
  left: 50%;
  top: 362px;
  width: 1297px;
  margin-left: -648px;
  padding: 40px;
  background: #ffffe5;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.48px;
}
.box p + p { margin-top: 32px !important; }
.lead { font-weight: 600; }
.cursor {
  position: absolute;
  left: 1625px;
  top: 785px;
  width: 36px;
  height: 36px;
  animation: cursor-in 1.1s var(--ease) 1.4s both;
}
@keyframes cursor-in {
  from { opacity: 0; transform: translate(40px, 30px); }
  to { opacity: 1; transform: none; }
}
</style>
