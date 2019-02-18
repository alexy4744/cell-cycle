<template>
  <div class="content">
    <h1 class="topic">
      <strong>Metaphase</strong>
    </h1>

    <p class="tagline">A checkpoint before
      <router-link to="/anaphase">anaphase</router-link>.
    </p>

    <p class="information">
      Metaphase makes use of the
      <router-link to="/prophase">kinetochore microtubules</router-link> created
      in previous stages to align the chromosomes at the metaphase plate/equatorial plane (center of the cell).
      It also runs through a series of checkpoint to ensure that it is ready for
      <router-link to="/anaphase">anaphase</router-link>
    </p>

    <h2 class="sub-topic">
      <strong>Checkpoints</strong>
    </h2>

    <ol>
      <li>It verifies that the
        <router-link to="/prophase">kinetochore microtubules</router-link> are properly binded to the chromosome.
      </li>

      <li>Make sure that the duplicated chromosomes will divide equally in
        <router-link to="/anaphase">anaphase</router-link>.
      </li>
    </ol>

    <p class="information">
      If the cell does not meet all of the checkpoints, mitosis will be temporarily stopped until the problem has
      been fixed so that it will pass all the required checkpoints.
    </p>

    <v-img class="img" src="https://cdn.kastatic.org/ka-perseus-images/5407efeb0c059ef99297910a4a46e0fbaec19211.png"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Metaphase extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #e65100;
}
</style>

