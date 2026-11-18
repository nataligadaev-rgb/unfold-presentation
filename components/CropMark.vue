<script setup lang="ts">
// A printer's crop mark. `at` is the corner it belongs to; geometry matches the Figma mark.
defineProps<{ at: 'tl' | 'tr' | 'bl' | 'br'; x: number; y: number; delay?: number }>()
</script>

<template>
  <i class="cm f" :class="at" :style="{ left: x + 'px', top: y + 'px', '--d': delay ?? 0 }" />
</template>

<style scoped>
.cm {
  position: absolute;
  width: 21px;
  height: 21px;
  display: block;
}
.cm::before {
  content: '';
  position: absolute;
  left: 19.65px;
  top: 0;
  width: 0.7px;
  height: 14px;
  background: #000;
}
.cm::after {
  content: '';
  position: absolute;
  left: 0;
  top: 19.65px;
  width: 15px;
  height: 0.7px;
  background: #000;
}
.br { transform: rotate(180deg); }
.bl { transform: scaleY(-1); }
.tr { transform: scaleX(-1); }
</style>
