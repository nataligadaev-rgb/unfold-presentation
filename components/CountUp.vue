<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

const props = withDefaults(
  defineProps<{ to: number; decimals?: number; duration?: number; delay?: number; suffix?: string }>(),
  { decimals: 0, duration: 2000, delay: 350, suffix: '' },
)

const fmt = (n: number) => n.toFixed(props.decimals)
const shown = ref(fmt(0))
let timer = 0
let tickTimer = 0

// Slidev keeps neighbouring slides mounted in the background, so counting must start when this
// slide becomes the *current* one — otherwise it would already be finished when you arrive.
const { currentPage } = useNav()
const { $page } = useSlideContext()
const active = computed(() => currentPage.value === $page.value)

const stop = () => {
  clearTimeout(timer)
  clearInterval(tickTimer)
}

const noMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ||
  window.location.search.includes('print') ||
  window.location.pathname.includes('export')

const run = () => {
  stop()
  if (noMotion()) {
    shown.value = fmt(props.to)
    return
  }
  shown.value = fmt(0)
  // timer-driven (not requestAnimationFrame) so it also runs when the tab is throttled
  timer = window.setTimeout(() => {
    const t0 = performance.now()
    tickTimer = window.setInterval(() => {
      const p = Math.min(1, (performance.now() - t0) / props.duration)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic: quick start, long soft landing
      shown.value = fmt(props.to * eased)
      if (p >= 1) clearInterval(tickTimer)
    }, 32)
  }, props.delay)
}

onMounted(() => {
  if (active.value) run()
  else shown.value = fmt(0)
})
// when leaving, keep the final number on screen through the slide fade, and only reset afterwards
let resetTimer = 0
watch(active, (now) => {
  clearTimeout(resetTimer)
  if (now) run()
  else resetTimer = window.setTimeout(() => {
    stop()
    shown.value = fmt(0)
  }, 1500)
})
onBeforeUnmount(() => {
  stop()
  clearTimeout(resetTimer)
})
</script>

<template>
  <span class="cu" dir="ltr">{{ shown }}{{ suffix }}</span>
</template>

<style scoped>
.cu { font-variant-numeric: tabular-nums; }
</style>
