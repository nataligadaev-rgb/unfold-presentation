<script setup lang="ts">
// Screenshots the team collected of how students and print shops actually talk today.
// i = how the picture is cropped inside its frame (taken from the Figma crop values).
type Shot = { x: number; y: number; w: number; h: number; src: string; border?: boolean; i?: Record<string, string>; bar?: [number, number] }
const shots: Shot[] = [
  { x: 542, y: 270, w: 230, h: 109, src: 'wf-93.png', border: true, i: { height: '178.1%', width: '100%', left: '0', top: '-0.04%' } },
  { x: 1139, y: 297, w: 258, h: 97, src: 'wf-92.png', border: true },
  { x: 245, y: 642, w: 159, h: 213, src: 'wf-91.png', i: { height: '119.92%', width: '100%', left: '0', top: '-0.1%' } },
  { x: 1528, y: 311, w: 206, h: 202, src: 'wf-49b.png', i: { height: '153.92%', width: '113.04%', left: '-12.83%', top: '-24.53%' } },
  { x: 194, y: 412, w: 250, h: 169, src: 'wf-90.png', i: { height: '126.73%', width: '100%', left: '0', top: '-26.86%' } },
  { x: 386, y: 721, w: 187, h: 209, src: 'wf-89.png', border: true },
  { x: 1005, y: 785, w: 334, h: 169, src: 'wf-83.png', border: true, i: { height: '101.98%', width: '100%', left: '0', top: '-0.07%' } },
  { x: 1486, y: 479, w: 303, h: 230, src: 'wf-84.png', border: true },
  { x: 1415, y: 630, w: 225, h: 268, src: 'wf-87.png', border: true, i: { height: '107.63%', width: '108.45%', left: '-0.02%', top: '-7.63%' } },
  // chat bubbles: shown whole (frame height follows the picture's own proportions) and the sender row
  // (name + phone number) is covered by a bar. bar = [top %, height %] of the bubble.
  { x: 833, y: 235, w: 244, h: 100, src: 'wf-2244.png', bar: [8, 17] },
  { x: 1266, y: 749, w: 262, h: 114, src: 'wf-2243.png', bar: [9, 14] },
  { x: 657, y: 806, w: 244, h: 81, src: 'wf-2240.png', bar: [14, 17] },
  { x: 281, y: 297, w: 246, h: 82, src: 'wf-2238.png', bar: [14, 17] },
  { x: 1397, y: 217, w: 230, h: 76, src: 'wf-2241.png', bar: [11, 19] },
]
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead kicker="What’s really happening" title="The Existing Workflow" />

    <div
      v-for="(s, k) in shots"
      :key="s.src"
      class="shot r"
      :class="{ bd: s.border }"
      :style="{ left: s.x + 'px', top: s.y + 'px', width: s.w + 'px', height: s.h + 'px', '--d': 250 + k * 70 }"
    >
      <img
        :src="'/assets/' + s.src"
        alt=""
        :class="{ fit: !s.i }"
        :style="s.i ? { position: 'absolute', maxWidth: 'none', ...s.i } : undefined"
      />
      <i v-if="s.bar" class="bar" :style="{ top: s.bar[0] + '%', height: s.bar[1] + '%' }" />
    </div>
    <p class="cap f" style="--d: 700" dir="rtl">קטלוג נייר</p>

    <div class="who stu r" dir="rtl" style="--d: 900">
      <p class="hd">סטודנטים לעיצוב</p>
      <p>המלצות מפה לאוזן</p>
      <p>התייעצות עם מרצים</p>
      <p>בירור עצמאי מול בתי דפוס</p>
      <p>תיקונים ברגע האחרון</p>
    </div>
    <div class="who shop r" dir="rtl" style="--d: 1050">
      <p class="hd">בתי דפוס</p>
      <p>מענה לשאלות חוזרות</p>
      <p>הסברים על אפשרויות ייצור</p>
      <p>הנחיות ותיקוני קבצים</p>
      <p>עיכובים בקבלת הזמנות</p>
    </div>

    <!-- highlighter-pen conclusion -->
    <div class="mark wr" style="--d: 1500" />
    <p class="res f" dir="rtl" style="--d: 1650">
      התוצאה היא <b>חוסר וודאות</b> מול <b>עומס תפעולי</b>
    </p>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.shot { position: absolute; overflow: hidden; }
.shot.bd { border: 1px solid #ededed; }
.shot img { display: block; }
.shot img.fit { width: 100%; height: 100%; object-fit: fill; }
.bar { position: absolute; left: 4%; width: 92%; background: #ededed; }
.cap {
  position: absolute;
  left: 194px;
  top: 594px;
  transform: translateX(-50%);
  font-size: 15.6px;
  line-height: 25px;
  color: #fff;
  white-space: nowrap;
  letter-spacing: -0.31px;
}
.who { position: absolute; top: 451px; padding: 20px; border-radius: 4px; font-size: 24px; line-height: 32px; letter-spacing: -0.48px; }
.who p { width: 265px; }
.who .hd { font-weight: 800; font-size: 16px; line-height: 36px; letter-spacing: -0.32px; }
.stu { left: 971px; background: #dee3ff; }
.shop { left: 646px; background: #c0efff; }
.mark { position: absolute; left: 769px; top: 697px; width: 375px; height: 29px; background: #ffffe5; border-radius: 4px; }
.res { position: absolute; left: 769px; top: 696px; width: 375px; text-align: center; font-size: 20px; line-height: 32px; letter-spacing: -0.4px; }
.res b { font-weight: 700; }
</style>
