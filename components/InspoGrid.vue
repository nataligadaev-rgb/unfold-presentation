<script setup lang="ts">
import type { Tile } from './inspo'
defineProps<{ tiles: Tile[] }>()
// reveal right-to-left (the deck reads in Hebrew), top row first
const d = (x: number, y: number) => 150 + Math.round((1920 - x) / 5) + (y > 500 ? 260 : 0)
</script>

<template>
  <div class="wrap he" lang="he">
    <template v-for="t in tiles" :key="t.src">
      <div class="img r" :style="{ left: t.x + 'px', top: t.y + 'px', width: t.w + 'px', height: t.h + 'px', '--d': d(t.x, t.y) }">
        <img
          :src="'/assets/' + t.src"
          alt=""
          :style="t.img ? { position: 'absolute', maxWidth: 'none', ...t.img } : { width: '100%', height: '100%', objectFit: 'cover' }"
        />
      </div>
      <div v-if="t.cap" class="cap r" :style="{ left: t.capX + 'px', top: t.capY + 'px', width: t.capW + 'px', '--d': d(t.x, t.y) + 160 }">
        <p dir="auto">{{ t.cap }}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.img { position: absolute; overflow: hidden; background: #333; }
.img img { display: block; }
.cap {
  position: absolute;
  height: 86px;
  padding: 12px 20px;
  border-radius: 3.4px;
  background: #ffffe5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
  font-size: 20.4px;
  line-height: 30.6px;
  letter-spacing: -0.41px;
  color: #000;
}
</style>
