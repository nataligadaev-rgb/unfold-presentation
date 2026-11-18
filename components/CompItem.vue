<script setup lang="ts">
import type { Comp } from './competitors'
defineProps<{ c: Comp; size?: number }>()
</script>

<template>
  <div class="it" :style="{ '--s': (size ?? 68) + 'px' }">
    <div class="logo" :class="{ bd: c.border }" :style="{ background: c.bg }">
      <img
        :src="'/assets/' + c.src"
        alt=""
        :style="c.img ? { position: 'absolute', maxWidth: 'none', ...c.img } : { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }"
      />
    </div>
    <div class="tx">
      <p class="nm" :class="{ he: c.he }" :dir="c.he ? 'rtl' : 'ltr'">{{ c.name }}</p>
      <p class="ds he" dir="rtl">{{ c.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.it { display: flex; align-items: center; gap: 22px; }
.logo { position: relative; width: var(--s); height: var(--s); border-radius: 12px; overflow: hidden; flex: none; }
.logo.bd { border: 1px solid #f7f7f7; }
.tx { display: flex; flex-direction: column; gap: 12px; white-space: nowrap; }
.nm { font: 600 20px/20px 'Inter Tight', sans-serif; letter-spacing: -0.4px; text-align: left; }
.nm.he { font-family: 'Heebo', sans-serif; font-weight: 700; }
.ds { font-size: 13px; line-height: 14px; letter-spacing: -0.26px; color: #9b9b9b; }
</style>
