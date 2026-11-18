<template>
  <div class="wrap">
    <SlideHead kicker="First Thoughts" title="Sketches" />

    <!-- 1. print shop search -->
    <div class="panel p1 r" style="--d: 250">
      <p class="pt">Printshops</p>
      <div class="chips">
        <span v-for="c in ['Location', 'Materials', 'Schools', 'Prices']" :key="c" class="chip"><i />{{ c }}</span>
      </div>
      <div class="cards">
        <div v-for="n in 6" :key="n" class="card r" :style="{ '--d': 500 + n * 80 }">
          <div class="ph">
            <svg viewBox="0 0 178 70" preserveAspectRatio="none"><path d="M0 0 L178 70 M178 0 L0 70" /></svg>
          </div>
          <p class="bx">Printshop</p>
          <p class="s">location</p>
        </div>
      </div>
    </div>

    <!-- 2. print shop workspace -->
    <div class="panel p2 r" style="--d: 450">
      <div class="c1">
        <div class="box h104 r" style="--d: 900"><p class="bx">Request</p><p class="s">details</p></div>
        <div class="tabs"><span>Student</span><span>Time</span></div>
        <div class="box file r" style="--d: 1000">
          <svg viewBox="0 0 190 187" preserveAspectRatio="none"><path d="M0 0 L190 187 M190 0 L0 187" /></svg>
          <p class="s fl">File</p>
        </div>
      </div>
      <div class="c2">
        <div v-for="n in 3" :key="n" class="box h104 r" :style="{ '--d': 1000 + n * 100 }"><p class="bx">Available Printer</p><p class="s">details</p></div>
      </div>
      <div class="c3 box r" style="--d: 1100">
        <p class="bx">Requests</p>
        <div class="pills"><i v-for="n in 3" :key="n"><em /></i></div>
        <p class="s big">Group same requests</p>
      </div>
    </div>

    <!-- the hand-off arrow: from the open file to the free printer -->
    <svg class="arrow" viewBox="0 0 1920 1080" width="1920" height="1080">
      <path class="curve f" style="--d: 1800" d="M1138 625 C1150 545 1196 520 1209 452" />
      <path class="head f" style="--d: 1900" d="M1203 462 L1209 450 L1216 461" />
    </svg>

    <p class="cap he r" dir="rtl" style="left: 561px; --d: 900">חיפוש בתי דפוס</p>
    <p class="cap he r" dir="rtl" style="left: 1151px; --d: 1300">סביבת עבודה של בתי הדפוס</p>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; font-family: 'Heebo', sans-serif; }
.panel { position: absolute; top: 362px; width: 605px; background: #fff; border: 1px solid #bcbcbc; border-radius: 12px; padding: 20px; }
.p1 { left: 335px; height: 389px; }
.p2 { left: 980px; height: 389px; display: flex; gap: 16px; align-items: center; }
.pt { font-weight: 700; font-size: 15px; letter-spacing: -0.3px; line-height: 20px; margin-bottom: 8px !important; }
.chips { display: flex; gap: 12px; margin-bottom: 12px; }
.chip { display: flex; gap: 5px; align-items: center; padding: 4px 8px; border: 1px solid #edeeea; border-radius: 40px; font-size: 15px; letter-spacing: -0.3px; line-height: 20px; }
.chip i { width: 12px; height: 12px; background: #d9d9d9; display: block; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.card { background: #fafafa; padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; }
.ph { height: 58px; background: #fff; border: 1px solid #edeeea; border-radius: 8px; overflow: hidden; }
.ph svg, .file svg { display: block; width: 100%; height: 100%; }
.ph path, .file path { stroke: #e2e2e2; stroke-width: 1; fill: none; }
.bx { font-weight: 700; font-size: 15px; letter-spacing: -0.3px; line-height: 20px; }
.s { font-size: 12px; letter-spacing: -0.24px; line-height: 16px; color: #9b9b9b; }
.c1 { width: 190px; display: flex; flex-direction: column; gap: 10px; }
.c2 { width: 151px; display: flex; flex-direction: column; gap: 10px; }
.box { background: #fafafa; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.h104 { height: 104px; }
.tabs { display: flex; justify-content: space-between; }
.tabs span { width: 93px; background: #fafafa; border-radius: 3px; padding: 8px; font-size: 11px; letter-spacing: -0.22px; }
.file { position: relative; height: 187px; padding: 0; }
.fl { position: absolute; left: 84px; bottom: 8px; font-size: 13px; }
.c3 { width: 190px; height: 332px; gap: 24px; }
.pills { display: flex; flex-direction: column; gap: 4px; }
.pills i { display: block; border: 1px solid #edeeea; background: #fff; border-radius: 40px; padding: 4px 8px; height: 22px; }
.pills em { display: block; width: 12px; height: 12px; border-radius: 50%; background: #d9d9d9; }
.big { font-size: 15px; letter-spacing: -0.3px; }
.arrow { position: absolute; left: 0; top: 0; pointer-events: none; }
.curve, .head { fill: none; stroke: #8a8a8a; stroke-width: 1.2; stroke-linecap: round; }
.cap { position: absolute; top: 774px; font-size: 24px; line-height: 44px; letter-spacing: -0.48px; white-space: nowrap; }
</style>
