<script setup lang="ts">
// 2×2 landscape of existing tools. `spotlight` dims everyone and shows where Unfold would sit.
defineProps<{ spotlight?: boolean }>()

// [label, left, top] — the label box is 118px wide; the dot sits under it, centred
const pts: [string, number, number, boolean?][] = [
  ['Printavo', 580.56, 689.49],
  ['Printsked', 641, 644],
  ['PrintBlocks', 722, 689],
  ['File Check', 939, 354],
  ['B2Cprint', 749, 431],
  ['איזיקופי', 1068, 419, true],
  ['דפוק בקליק', 1117, 592, true],
  ['עותקים', 1279, 738, true],
  ['Proof Queue', 1019, 607],
  ['Print Now', 1212.04, 644.57],
  ['Cross Print', 1151.27, 735.28],
  ['Artwork Proofing', 1118.69, 473.71],
  ['Pacdora', 1244.63, 306.37],
  ['PrintMIS', 526.83, 743.21],
]
</script>

<template>
  <div class="wrap">
    <div class="plane f" style="--d: 100" />
    <div class="vax wd" style="--d: 200" />
    <div class="hax wl" style="--d: 300" />

    <p class="ax top f" style="--d: 400">Design &amp; File Preparation Support</p>
    <p class="ax bottom f" style="--d: 400">Primary User Focus</p>
    <p class="ax left f" style="--d: 400"><span>Order Management</span></p>
    <p class="side l f" style="--d: 500">Print Shop</p>
    <p class="side r2 f" style="--d: 500">Customer</p>

    <!-- Automate Print has its label to the left of its dot -->
    <div class="pt lone p" :class="{ dim: spotlight }" style="left: 641.33px; top: 430.55px; --d: 700">
      <p>Automate Print</p>
    </div>
    <img class="dot p" :class="{ dim: spotlight }" style="left: 692px; top: 452px; --d: 700" src="/assets/dot-a.svg" alt="" />

    <div
      v-for="(p, i) in pts"
      :key="p[0]"
      class="pt p"
      :class="{ dim: spotlight }"
      :style="{ left: p[1] + 'px', top: p[2] + 'px', '--d': 750 + i * 60 }"
    >
      <p :class="{ he: p[3] }" :dir="p[3] ? 'rtl' : 'ltr'">{{ p[0] }}</p>
      <img src="/assets/dot-b.svg" alt="" />
    </div>

    <template v-if="spotlight">
      <div class="halo" />
      <div class="us p" style="--d: 1900">
        <i />
        <p>Unfold</p>
      </div>
      <p class="why r" style="--d: 2300" dir="ltr">Both sides · file prep · order management</p>
    </template>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.plane { position: absolute; left: 468px; top: 256px; width: 960px; height: 580px; background: #fafafa; }
.vax { position: absolute; left: 946.9px; top: 272px; height: 543.6px; border-left: 1px dashed #bcbcbc; }
.hax { position: absolute; left: 482px; top: 543.3px; width: 931.5px; border-top: 1px dashed #bcbcbc; }
.ax, .side { position: absolute; font: 400 20px/36px 'Inter Tight', sans-serif; letter-spacing: -0.4px; white-space: nowrap; }
.top { left: 805px; top: 225px; }
.bottom { left: 867px; top: 853px; }
.left { left: 428px; top: 458px; width: 14px; height: 171px; }
.left span { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-90deg); }
.side { color: #9b9b9b; top: 558px; }
.side.l { left: 484px; }
.side.r2 { left: 1328px; }
.pt { position: absolute; width: 118px; display: flex; flex-direction: column; align-items: center; gap: 8.8px; transition: opacity 0.6s ease; }
.pt p { font: 600 16px/36px 'Inter Tight', sans-serif; letter-spacing: -0.32px; white-space: nowrap; text-box-trim: trim-both; text-box-edge: cap alphabetic; }
.pt p.he { font-family: 'Heebo', sans-serif; }
.pt img, .dot { width: 16px; height: 16px; display: block; }
.lone { width: auto; }
.dot { position: absolute; }
.dim { opacity: 0.22 !important; }
.halo {
  position: absolute;
  left: 750px;
  top: 396px;
  width: 400px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(6, 174, 240, 0.22), rgba(6, 174, 240, 0));
  animation: u-fade 1.2s ease both 1.6s, u-breathe 4s ease-in-out 3s infinite;
}
.us { position: absolute; left: 905px; top: 515px; display: flex; flex-direction: column; align-items: center; gap: 6px; width: 110px; }
.us i { order: 2; width: 22px; height: 22px; border-radius: 50%; background: #06aef0; box-shadow: 0 0 0 7px rgba(6, 174, 240, 0.25); }
.us p { order: 1; font: 700 22px/28px 'Inter Tight', sans-serif; letter-spacing: -0.44px; color: #000; }
.why { position: absolute; left: 0; right: 0; top: 905px; text-align: center; font: 500 20px/32px 'Instrument Sans', sans-serif; color: #06aef0; letter-spacing: -0.4px; }
</style>
