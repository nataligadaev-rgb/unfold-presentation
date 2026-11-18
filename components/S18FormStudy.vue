<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="Research & Statistics" title="Data Collection" crumb />

    <div class="kpi k1 r" style="--d: 300">
      <p class="n"><CountUp :to="33" suffix="%" :delay="300" :duration="1300" /></p>
      <p class="l" dir="rtl">הצליחו להשלים עם <b>הוראות בתחילת הטופס</b></p>
    </div>
    <div class="kpi k2 r" style="--d: 600">
      <p class="n"><CountUp :to="36.2" :decimals="1" suffix="%" :delay="450" :duration="1150" /></p>
      <p class="l" dir="rtl">הצליחו להשלים עם <b>הוראות לצד הטופס</b></p>
    </div>

    <div class="cut wr" style="--d: 700" />
    <div class="sc"><img src="/assets/scissors.svg" alt="" class="scis" /></div>

    <div class="txt r" dir="rtl" style="--d: 500">
      <p>ממשלת ארה״ב בדקה כיצד מיקום ההוראות בטופס משפיע על היכולת של אנשים להשלים את תהליך המילוי, והאם הצגת הוראות ברורה יותר מפחיתה נטישה.</p>
      <p>החוקרים חילקו את המשתתפים לשתי קבוצות: קבוצה אחת קיבלה טופס שבו ההוראות הופיעו בתחילתו, וקבוצה שנייה קיבלה טופס שבו ההוראות שולבו לצד השדות הרלוונטיים. יותר מ־3,000 אנשים התחילו למלא את הטפסים במשך כחודש.</p>
      <p>כ- 67% מהאנשים שהתחילו למלא את הטפסים לא השלימו אותם. שילוב ההוראות לצד השדות העלה את שיעור ההשלמה ב־3.2 נקודות אחוז, אך ההבדל לא היה מובהק סטטיסטית.</p>
    </div>
    <div class="take r" dir="rtl" style="--d: 1300">
      <p>הממצא מדגיש את החשיבות של הנחיות ברורות בזמן ביצוע פעולה</p>
      <p>עיקרון שרלוונטי גם להכנת קבצים ולמילוי פרטי הזמנה בפלטפורמת הדפוס.</p>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.kpi { position: absolute; left: 307px; width: 194px; text-align: center; }
.k1 { top: 340px; }
.k2 { top: 574px; }
.n { font: 500 48px/44px 'Saans', 'Heebo', sans-serif; letter-spacing: -1.44px; }
.l { margin-top: 8px !important; font-size: 20px; line-height: 32px; letter-spacing: -0.4px; color: #9b9b9b; }
.l b { font-weight: 700; }
.cut { position: absolute; left: 244px; top: 510px; width: 288px; border-top: 1px dashed #6a6a6a; }
.sc { position: absolute; left: 532px; top: 494px; width: 32px; height: 32px; transform: rotate(180deg); }
.scis { width: 32px; height: 32px; display: block; animation: scis-in 0.4s ease 0.1s both; }
@keyframes scis-in { from { opacity: 0; } to { opacity: 1; } }
.txt { position: absolute; right: 155px; top: 340px; width: 853px; font-size: 24px; line-height: 32px; letter-spacing: -0.48px; }
.txt p + p { margin-top: 32px !important; }
.take { position: absolute; right: 155px; top: 680px; width: 991px; font-weight: 700; font-size: 32px; line-height: 40px; letter-spacing: -0.64px; color: #06aef0; }
</style>
