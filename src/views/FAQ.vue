<template>
  <div class="content">
    <h1 class="topic">
      <strong>FAQ</strong>
    </h1>

    <p class="tagline">Frequently Asked Questions</p>

    <p class="information">
      <strong>Q:</strong> Why is it important for the cell cycle to be regulated?
    </p>
    <p class="information">
      <strong>A:</strong> Cell cycle regulation prevents the cell from being mutated. If the cell cycle was not regulated,
      then the phases may be triggered prematurely or not even be triggered at all. There would also be no checkpoints between
      each phase, making it easy for mutations to occur. This could lead to abnormalities and can lead to cancer.
    </p>

    <hr>

    <p class="information">
      <strong>Q:</strong> How does the cell cycle relate to cancer?
    </p>
    <p class="information">
      <strong>A:</strong> Normally the cell cycle ensures that DNA is undamaged through cell cycle regulations and checkpoints.
      However, if the DNA is in fact damaged and is passed on, cells that have these DNA normally undergo apoptosis, which is
      programmed cell death. But some cells that do have damaged DNA are unable to undergo apoptosis. These cells may or may not
      become cancer cells if they start dividing uncontrollably without signals to do so.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FAQ extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #9c27b0;
}

hr {
  height: 1px;
  background-image: radial-gradient(#9c27b0, white);
  border: 0;
  margin-bottom: 40px;
}
</style>
