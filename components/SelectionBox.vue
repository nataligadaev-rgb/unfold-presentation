<script setup lang="ts">
// The Figma "selected object" frame (dashed outline + 8 handles) used as a wink on slides 2 and 11.
defineProps<{ x: number; y: number; w: number; h: number; delay?: number }>()
const handles = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']
</script>

<template>
  <div class="sel f" :style="{ left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px', '--d': delay ?? 0 }">
    <i v-for="h in handles" :key="h" :class="'h-' + h" />
  </div>
</template>

<style scoped>
.sel {
  position: absolute;
  border: 1px dashed #59595b;
  pointer-events: none;
}
/* Figma handles: 13.8px white squares with a 1.25px #59595B border, centred on the dashed line */
i {
  position: absolute;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 1.25px solid #59595b;
}
.h-tl { left: -7.5px; top: -7.5px; }
.h-tm { left: calc(50% - 7px); top: -7.5px; }
.h-tr { right: -7.5px; top: -7.5px; }
.h-ml { left: -7.5px; top: calc(50% - 7px); }
.h-mr { right: -7.5px; top: calc(50% - 7px); }
.h-bl { left: -7.5px; bottom: -7.5px; }
.h-bm { left: calc(50% - 7px); bottom: -7.5px; }
.h-br { right: -7.5px; bottom: -7.5px; }
</style>
