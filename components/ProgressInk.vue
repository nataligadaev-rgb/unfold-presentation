<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

// Progress shown as ink: the four CMYK squares fill one after another (C → M → Y → K)
// as the deck moves along. The counter beside them rolls like an odometer on every change.
const { currentPage, total } = useNav()

const p = computed(() => (total.value > 1 ? (currentPage.value - 1) / (total.value - 1) : 1))
const fills = computed(() => [0, 1, 2, 3].map((i) => Math.min(1, Math.max(0, p.value * 4 - i))))
const digits = computed(() => String(currentPage.value).padStart(2, '0').split('').map(Number))
const totalText = computed(() => String(total.value).padStart(2, '0'))
</script>

<template>
  <div class="pi">
    <span class="num">
      <span class="odo">
        <span v-for="(d, i) in digits" :key="i" class="win">
          <span class="col" :style="{ transform: `translateY(${-d * 14}px)` }">
            <i v-for="n in 10" :key="n">{{ n - 1 }}</i>
          </span>
        </span>
      </span>
      <span class="of">/ {{ totalText }}</span>
    </span>
    <span class="sq">
      <i v-for="(f, i) in fills" :key="i" :class="'k' + i">
        <em :style="{ transform: `scaleX(${f})` }" />
      </i>
    </span>
  </div>
</template>

<style scoped>
.pi {
  position: absolute;
  right: 60px;
  top: 1018px;
  display: flex;
  align-items: center;
  gap: 18px;
  height: 14px;
}
.num {
  display: flex;
  align-items: center;
  gap: 5px;
  font: 400 16px/14px 'Saans', 'Heebo', sans-serif;
  letter-spacing: -0.32px;
  color: #b4b4b4;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.odo { display: flex; color: #7d7d7d; font-weight: 500; }
.win { display: block; height: 14px; width: 9.4px; overflow: hidden; }
.col { display: flex; flex-direction: column; transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1); }
.col i { display: block; height: 14px; line-height: 14px; font-style: normal; text-align: center; }
.sq { display: flex; }
.sq i { position: relative; display: block; width: 14px; height: 14px; overflow: hidden; }
/* each square: the unfilled ink is a faint tint, the filled part is the real colour */
.sq i::before { content: ''; position: absolute; inset: 0; background: currentColor; opacity: 0.16; }
em { position: absolute; inset: 0; background: currentColor; transform-origin: left center; transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
.k0 { color: #06aef0; }
.k1 { color: #ed018c; }
.k2 { color: #fcf003; }
.k3 { color: #231f20; }
:global(.gb.dark) .k3 { color: #8a8a8a; }
</style>
