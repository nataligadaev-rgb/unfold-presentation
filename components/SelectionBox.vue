<script setup lang="ts">
// The Figma "selected object" frame (dashed outline + 8 handles) used as a wink on slides 2 and 11.
defineProps<{ x: number; y: number; w: number; h: number; delay?: number }>()
const handles = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']
</script>

<template>
  <div class="sel f" :style="{ left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px', '--d': delay ?? 0 }">
    <i v-for="h in handles" :key="h" :class="h" />
  </div>
</template>

<style scoped>
.sel {
  position: absolute;
  border: 1px dashed #8d8d8d;
  pointer-events: none;
}
i {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 1px solid #7a7a7a;
}
.tl { left: -6px; top: -6px; }
.tm { left: calc(50% - 5px); top: -6px; }
.tr { right: -6px; top: -6px; }
.ml { left: -6px; top: calc(50% - 5px); }
.mr { right: -6px; top: calc(50% - 5px); }
.bl { left: -6px; bottom: -6px; }
.bm { left: calc(50% - 5px); bottom: -6px; }
.br { right: -6px; bottom: -6px; }
</style>
