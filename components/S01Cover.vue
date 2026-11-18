<template>
  <div class="cover">
    <p class="title r trim" style="--d: 120">Unfold</p>
    <p class="tag r trim" style="--d: 420">From File to Finish.</p>

    <span class="cmyk-sq bar">
      <i v-for="n in 4" :key="n" class="p" :style="{ '--d': 800 + n * 110 }" />
    </span>

    <CropMark at="tl" :x="438" :y="354" :delay="1100" />
    <CropMark at="tr" :x="1462" :y="354" :delay="1180" />
    <CropMark at="br" :x="1462" :y="704" :delay="1260" />
    <CropMark at="bl" :x="438" :y="704" :delay="1340" />
  </div>
</template>

<style scoped>
.cover { position: absolute; inset: 0; }
.title {
  position: absolute;
  left: 0;
  right: 0;
  top: 475px;
  text-align: center;
  font: 700 96px/44px 'Saans', 'Heebo', sans-serif;
  letter-spacing: -1.92px;
}
.tag {
  position: absolute;
  left: 0;
  right: 0;
  top: 587px;
  text-align: center;
  font: italic 300 36px/44px 'Saans', 'Heebo', sans-serif;
  letter-spacing: -0.72px;
}
.bar { position: absolute; left: 932px; top: 650px; }
</style>
