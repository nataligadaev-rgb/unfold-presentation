<script setup lang="ts">
// 2×2 landscape of existing tools.
// Geometry comes straight from Figma. Labels there are "cap-trimmed", so every label is placed by the
// height of its capital letters (T = top of the caps) and every dot sits 20.4px below that — fixed boxes,
// so the layout does not depend on browser support for text-box-trim.

// [label, left, top-of-caps, hebrew?]; the label box is 118px wide and the dot is centred under it
const pts: [string, number, number, boolean?][] = [
  ['Printavo', 580.56, 689.49],
  ['Printsked', 641, 644],
  ['PrintBlocks', 722, 689],
  ['File Check', 939, 354],
  ['B2Cprint', 749, 431],
  ['איזיקופי', 1068, 419, true],
  ['דפוס בקליק', 1117, 592, true],
  ['עותקים', 1279, 738, true],
  ['Proof Queue', 1019, 607],
  ['Print Now', 1212.04, 644.57],
  ['Cross Print', 1151.27, 735.28],
  ['Artwork Proofing', 1118.69, 473.71],
  ['Pacdora', 1244.63, 306.37],
  ['PrintMIS', 526.83, 743.21],
]
const CAP16 = 11.6 // cap height of 16px text
const DOT_GAP = CAP16 + 8.8
</script>

<template>
  <div class="wrap">
    <div class="plane f" style="--d: 100" />
    <div class="vax wd" style="--d: 200" />
    <div class="hax wl" style="--d: 300" />

    <p class="ax f" style="left: 805px; top: 225px; --d: 400">Design &amp; File Preparation Support</p>
    <p class="ax f" style="left: 867.35px; top: 853.3px; --d: 400">Primary User Focus</p>
    <p class="ax rot f" style="left: 435px; top: 543.5px; --d: 400">Order Management</p>
    <p class="ax grey f" style="left: 483.77px; top: 558.12px; --d: 500">Print Shop</p>
    <p class="ax grey f" style="left: 1328px; top: 558px; --d: 500">Customer</p>

    <!-- Automate Print: its label is left-aligned at 641, the dot at 692 -->
    <p class="lbl lone p" style="left: 641.33px; top: 430.55px; --d: 700">Automate Print</p>
    <img class="dot p" style="left: 692px; top: 452px; --d: 700" src="/assets/dot-a.svg" alt="" />

    <template v-for="(p, i) in pts" :key="p[0]">
      <p
        class="lbl p"
        :class="{ he: p[3] }"
        :dir="p[3] ? 'rtl' : 'ltr'"
        :style="{ left: p[1] + 'px', top: p[2] + 'px', '--d': 750 + i * 60 }"
      >{{ p[0] }}</p>
      <img class="dot p" :style="{ left: p[1] + 59 - 8 + 'px', top: p[2] + DOT_GAP + 'px', '--d': 750 + i * 60 }" src="/assets/dot-b.svg" alt="" />
    </template>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.plane { position: absolute; left: 468px; top: 256px; width: 960px; height: 580px; background: #fafafa; }
.vax { position: absolute; left: 946.9px; top: 272px; height: 543.6px; border-left: 1px dashed #bcbcbc; }
.hax { position: absolute; left: 482px; top: 543.3px; width: 931.5px; border-top: 1px dashed #bcbcbc; }

/* 20px labels: box = cap height (14.5px), text centred in it */
.ax { position: absolute; height: 14.5px; display: flex; align-items: center; font: 400 20px/1 'Saans', 'Heebo', sans-serif; letter-spacing: -0.4px; white-space: nowrap; }
.ax.grey { color: #9b9b9b; }
.ax.rot { height: auto; transform: translate(-50%, -50%) rotate(-90deg); }

/* 16px labels: 118px wide, centred over the dot */
.lbl { position: absolute; width: 118px; height: 11.6px; display: flex; align-items: center; justify-content: center; font: 600 16px/1 'Saans', 'Heebo', sans-serif; letter-spacing: -0.32px; white-space: nowrap; }
.lbl.he { font-family: 'Heebo', sans-serif; }
.lbl.lone { width: auto; justify-content: flex-start; }
.dot { position: absolute; width: 16px; height: 16px; display: block; }
</style>
