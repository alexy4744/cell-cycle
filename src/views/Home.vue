<template>
  <div class="content">
    <h1 class="topic">
      <strong>Cell Cycle</strong>
    </h1>
    <p class="tagline">The cycle in which cells prepare for mitosis and meiosis.</p>
    <v-btn color="blue" dark to="/interphase">Begin</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue { }
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

strong {
  color: #2196f3;
}
</style>

