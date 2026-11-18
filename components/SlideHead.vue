<script setup lang="ts">
defineProps<{ kicker: string; title: string; sub?: string; crumb?: boolean }>()
</script>

<template>
  <div class="head">
    <p v-if="crumb" class="kick crumb r trim" style="--d: 60">
      {{ kicker }} / <b>{{ title }}</b>
    </p>
    <template v-else>
      <p class="kick r trim" style="--d: 60">{{ kicker }}</p>
      <p class="ttl r trim" style="--d: 140">
        {{ title }}<span v-if="sub" class="sub"> {{ sub }}</span>
      </p>
    </template>
  </div>
</template>

<style scoped>
.head {
  position: absolute;
  left: 120px;
  top: 128px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  white-space: nowrap;
}
.kick {
  font: 400 20px/44px 'Instrument Sans', sans-serif;
  letter-spacing: -0.4px;
  color: #a9a9a9;
}
.crumb b { font-weight: 700; }
.ttl {
  font: 700 40px/44px 'Inter Tight', sans-serif;
  letter-spacing: -0.8px;
  color: #000;
}
.sub { color: #9b9b9b; }
</style>
