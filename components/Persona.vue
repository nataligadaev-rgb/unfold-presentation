<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  name: string
  age: string
  role: string
  photo: string
  aboutTitle: string
  about: string
  behaviors: string[]
  problems: string[]
  goals: string[]
}>()
</script>

<template>
  <div class="wrap he" lang="he">
    <SlideHead :kicker="kicker" :title="title" />

    <!-- polaroid-ish photo card with a paperclip that drops on -->
    <div class="board r" style="--d: 200" />
    <img class="photo r" style="--d: 320" :src="photo" alt="" />
    <img class="clip dr" style="--d: 700" src="/assets/paperclip.png" alt="" />

    <div class="who r" dir="rtl" style="--d: 380">
      <div class="nm"><b>{{ name }}</b><span class="age">{{ age }}</span></div>
      <p class="role">{{ role }}</p>
    </div>

    <div class="blk b-about r" dir="rtl" style="--d: 520">
      <p class="hd">{{ aboutTitle }}</p>
      <p class="tx">{{ about }}</p>
    </div>
    <div class="blk b-beh r" dir="rtl" style="--d: 640">
      <p class="hd">דפוסי התנהגות</p>
      <ul><li v-for="x in behaviors" :key="x">{{ x }}</li></ul>
    </div>
    <div class="blk b-prob r" dir="rtl" style="--d: 760">
      <p class="hd">בעיות</p>
      <ul><li v-for="x in problems" :key="x">{{ x }}</li></ul>
    </div>
    <div class="blk b-goal r" dir="rtl" style="--d: 880">
      <p class="hd">מטרות</p>
      <ul><li v-for="x in goals" :key="x">{{ x }}</li></ul>
    </div>
  </div>
</template>

<style scoped>
.wrap { position: absolute; inset: 0; }
.board { position: absolute; left: 1382px; top: 306px; width: 383px; height: 544px; background: #edeeea; border-radius: 4px; }
.photo { position: absolute; left: 1409px; top: 342px; width: 329px; height: 412px; border-radius: 2px; object-fit: cover; object-position: center top; }
.clip { position: absolute; left: 1656px; top: 255px; width: 121px; height: 193px; transform-origin: 50% 0; }
.who { position: absolute; left: 1032px; top: 338px; width: 284px; }
.nm { display: flex; align-items: flex-end; gap: 9px; }
.nm b { font-size: 40px; line-height: 44px; font-weight: 700; letter-spacing: -0.8px; }
.age { font-size: 20px; line-height: 24px; color: #9b9b9b; }
.role { margin-top: 8px !important; font-size: 20px; line-height: 34.5px; color: #9b9b9b; }
.blk { position: absolute; font-size: 20px; }
.hd { font-weight: 700; line-height: 28px; }
.tx { line-height: 28px; }
.blk li { line-height: 28px; position: relative; padding-inline-start: 30px; }
.blk li::before { content: '•'; position: absolute; inset-inline-start: 8px; }
.b-about { right: 604px; top: 436px; width: 492px; }
.b-beh { right: 604px; top: 652px; width: 581px; }
.b-prob { right: 1207px; top: 436px; white-space: nowrap; }
.b-goal { right: 1207px; top: 652px; width: 506px; }
</style>
