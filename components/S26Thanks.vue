<template>
  <div class="wrap">
    <div class="shot dn" style="--d: 150">
      <img src="/assets/menu-shot.png" alt="" />
    </div>
    <div class="hl f" style="--d: 1500" />
    <img class="cur" src="/assets/cursor.png" alt="" />

    <p class="title r trim" style="--d: 500">Thank You!</p>
    <p class="tag r trim" style="--d: 800">&amp; don’t forget to work on CMYK</p>
    <span class="cmyk-sq bar"><i v-for="n in 4" :key="n" class="p" :style="{ '--d': 1200 + n * 110 }" /></span>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.shot { position: absolute; left: 1460px; top: 0; width: 353px; height: 371px; overflow: hidden; }
.shot img { display: block; width: 100%; height: 100%; object-fit: cover; }
.dn { animation: shot-in 0.5s var(--ease) both; animation-delay: calc(var(--d) * 0.43ms + 50ms); }
@keyframes shot-in { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: none; } }
/* the "Print…" row gets highlighted by the cursor */
.hl { position: absolute; left: 1480.6px; top: 321.5px; width: 314.7px; height: 26px; background: #000; mix-blend-mode: overlay; border-radius: 4px; }
.cur { position: absolute; left: 1648px; top: 339px; width: 32px; height: 32px; animation: cur-in 0.55s var(--ease) 0.5s both; }
@keyframes cur-in { from { opacity: 0; transform: translate(-30px, -44px); } to { opacity: 1; transform: none; } }
.title { position: absolute; left: 0; right: 0; top: 475px; text-align: center; font: 700 96px/44px 'Inter Tight', sans-serif; letter-spacing: -1.92px; }
.tag { position: absolute; left: 0; right: 0; top: 587px; text-align: center; font: italic 300 36px/44px 'Inter Tight', sans-serif; letter-spacing: -0.72px; color: #9b9b9b; }
.bar { position: absolute; left: 928px; top: 650px; }
</style>
