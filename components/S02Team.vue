<script setup lang="ts">
const people = [
  { name: 'Natali Gadaev', tilt: -4, photo: '/assets/team-natali.png', pos: 'center', size: '100% 100%' },
  { name: 'Or Jhirad', tilt: 4, photo: '/assets/team-or.png', pos: '-12px -58.8px', size: '188px 247px' },
  { name: 'Yuval Koenig', tilt: -4, photo: '/assets/team-yuval.png', pos: 'center', size: 'cover' },
]
</script>

<template>
  <div class="team">
    <div class="row">
      <div v-for="(p, i) in people" :key="p.name" class="slot">
        <div class="tilt" :style="{ transform: `rotate(${p.tilt}deg)` }">
          <div class="tile r" :style="{ '--d': 150 + i * 160 }">
            <div class="photo" :style="{ backgroundImage: `url(${p.photo})`, backgroundPosition: p.pos, backgroundSize: p.size }" />
            <p class="name"><span class="at">@</span>{{ p.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <SelectionBox :x="577" :y="380" :w="767" :h="320" :delay="900" />
    <img class="cursor" src="/assets/cursor.png" alt="" />
    <p class="keys f trim" style="--d: 1500">Ctrl / ⌘ + G</p>
  </div>
</template>

<style scoped>
.team { position: absolute; inset: 0; }
.row {
  position: absolute;
  left: 50%;
  top: calc(50% + 6px);
  transform: translate(calc(-50% + 1px), -50%);
  display: flex;
  gap: 40px;
}
.slot { width: 180px; height: 219px; display: flex; align-items: center; justify-content: center; }
.tile { width: 166px; display: flex; flex-direction: column; align-items: center; gap: 24px; }
.photo { width: 163px; height: 163px; border-radius: 4px; background-repeat: no-repeat; }
.name {
  display: flex;
  gap: 4px;
  align-items: baseline;
  font: 400 24px/1 'Saans', 'Heebo', sans-serif;
  letter-spacing: -0.48px;
  white-space: nowrap;
}
.at { font-style: italic; font-weight: 300; color: #bcbcbc; margin-right: 2px; }
.cursor {
  position: absolute;
  left: 1337px;
  top: 697px;
  width: 36px;
  height: 36px;
  animation: cursor-in 0.55s var(--ease) 0.55s both;
}
@keyframes cursor-in {
  from { opacity: 0; transform: translate(40px, 30px); }
  to { opacity: 1; transform: none; }
}
.keys {
  position: absolute;
  left: 1364px;
  top: 738px;
  font: 500 24px/44px 'Saans', 'Heebo', sans-serif;
  letter-spacing: -0.48px;
}
</style>
