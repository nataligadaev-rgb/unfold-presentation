<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

// One footer for the whole deck. It sits outside the slide transition, so it never
// disappears between slides — only its details change (and it hides on the cover).
const { currentSlideRoute } = useNav()
const fm = computed<Record<string, any>>(() => currentSlideRoute.value?.meta?.slide?.frontmatter ?? {})
const mode = computed<string>(() => fm.value.footer ?? 'full')
const dark = computed(() => !!fm.value.dark)
</script>

<template>
  <div class="gb" :class="{ dark, hide: mode === 'none', mini: mode === 'center' }">
    <span class="ft ft-l">Natali, Yuval, Or j.</span>
    <span class="ft ft-c">[ Unfold ]</span>
    <ProgressInk class="pg" />
  </div>
</template>

<style scoped>
.gb {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 20;
  transition: opacity 0.5s ease;
}
.gb.hide { opacity: 0; }
.ft {
  position: absolute;
  top: 1019px;
  font-size: 16px;
  line-height: 44px;
  letter-spacing: -0.32px;
  color: #9b9b9b;
  white-space: nowrap;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  transition: opacity 0.5s ease;
}
.ft-l { left: 60px; }
.ft-c { left: 50%; transform: translateX(-50%); }
/* closing slide: only "[ Unfold ]" stays */
.mini .ft-l, .mini .pg { opacity: 0; }
.pg { transition: opacity 0.5s ease; }
</style>
