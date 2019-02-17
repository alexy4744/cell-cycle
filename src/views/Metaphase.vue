<template>
  <div class="content">
    <h1 class="topic">
      <strong>Metaphase</strong>
    </h1>

    <p class="tagline">Phase where the cell gets ready for division</p>

    <p class="information">
      After the mitotic spindle moves and lines up the chromosome in place at the metaphase plate/equatorial
      plane (center of the cell), it verifies that the
      <router-link to="/prophase">kinetochore microtubules</router-link> are properly binded to the chromosome.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Metaphase extends Vue {

}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #e65100;
}
</style>

