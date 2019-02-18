<template>
  <div class="content">
    <h1 class="topic">
      <strong>Anaphase</strong>
    </h1>
    <p class="tagline">The seperation of sister chromatids.</p>
    <p class="information">
      Anaphase is the phase where the previously packed chromosomes are now going to be seperated.
      It makes use of the connected microtubules to push poles apart which makes the cell visibly longer.
      As the poles are being pushed apart,
      <router-link to="/prophase">kinetochore microtubules</router-link> pull the chromosomes toward the poles,
      which effectively seperates the chromosomes into <strong>individual chromosomes</strong>. This process is called
      <strong>disjunction</strong>. All of these movements uses <strong>motor proteins</strong> in order to
      move and seperate chromosomes.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Anaphase extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #3f51b5;
}
</style>

