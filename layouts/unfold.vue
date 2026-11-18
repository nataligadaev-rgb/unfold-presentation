<script setup lang="ts">
defineProps<{
  dark?: boolean
  footer?: 'full' | 'center' | 'none'
  still?: boolean
  optional?: string
}>()
</script>

<template>
  <div class="slidev-layout unfold" :class="{ dark, still }">
    <slot />

    <!-- the footer itself lives in /global-bottom.vue so it persists between slides -->

    <div v-if="optional" class="opt">
      <b>Optional</b>
      <span>{{ optional }}</span>
    </div>
  </div>
</template>

<style scoped>
/* the "optional" tag: visible on purpose so the alternates are easy to spot and delete */
.opt {
  position: absolute;
  right: 60px;
  top: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px 8px 10px;
  border-radius: 999px;
  background: #fffbe0;
  border: 1px solid #f1e6a0;
  font: 500 14px/1 'Instrument Sans', sans-serif;
  color: #6b6420;
  z-index: 5;
  animation: u-fade 0.8s ease both 0.2s;
}
.opt b {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #fcf003;
  color: #231f20;
}
.dark .opt { background: #3a3920; border-color: #55531f; color: #e9e6a6; }
</style>
