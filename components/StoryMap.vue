<script setup lang="ts">
const props = defineProps<{
  kicker: string
  title: string
  sub: string
  left: number
  cols: { step: string; details: string[] }[] // right-to-left, as in the Hebrew layout
  activities: { label: string; span: number }[]
  stepColor: string
  detailColor: string
  /** show the black activity headers without any animation */
  plainHeaders?: boolean
}>()

// where each activity starts (1-based grid column, counted from the right)
const starts = props.activities.reduce<number[]>((a, x, i) => [...a, i === 0 ? 1 : a[i - 1] + props.activities[i - 1].span], [])
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead :kicker="kicker" :title="title" :sub="sub" />

    <div class="map" dir="rtl" :style="{ left: left + 'px', gridTemplateColumns: `repeat(${cols.length}, 187px)` }">
      <div
        v-for="(a, i) in activities"
        :key="a.label"
        :class="['act', plainHeaders ? '' : 'wr']"
        :style="{ gridColumn: `${starts[i]} / span ${a.span}`, gridRow: 1, '--d': 200 + i * 80 }"
      >
        {{ a.label }}
      </div>

      <template v-for="(c, ci) in cols" :key="ci">
        <div class="step r" :style="{ gridColumn: ci + 1, gridRow: 2, background: stepColor, '--d': 320 + ci * 70 }">
          <span v-html="c.step.replace('\n', '<br>')" />
        </div>
        <div
          v-for="(d, di) in c.details"
          :key="di"
          class="det r"
          :style="{ gridColumn: ci + 1, gridRow: 3 + di, background: detailColor, '--d': 420 + ci * 70 + di * 45 }"
        >
          <span v-html="d.replace('\n', '<br>')" />
        </div>
      </template>
    </div>

    <i class="rule f" style="--d: 1200" />
    <div class="legend f" style="--d: 1250">
      <span><i class="k" style="background: #000" />Activities</span>
      <span><i class="k" :style="{ background: stepColor }" />Steps</span>
      <span><i class="k" :style="{ background: detailColor }" />Details</span>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.map {
  position: absolute;
  top: 289px;
  display: grid;
  gap: 8px;
  grid-template-rows: 38px 96px repeat(4, 95px);
}
.act, .step, .det {
  border-radius: 4px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.64px;
  color: #000;
}
.act { background: #000; color: #fff; font-weight: 700; }
.step { font-weight: 700; }
.det { font-weight: 400; }
.rule { position: absolute; left: 97px; top: 906px; width: 114px; border-top: 1px solid #cfcfcf; }
.legend { position: absolute; left: 100px; top: 933px; display: flex; gap: 20px; font-size: 16px; letter-spacing: -0.64px; }
.legend span { display: flex; align-items: center; gap: 8px; }
.k { width: 20px; height: 20px; border-radius: 2px; display: block; }
</style>
