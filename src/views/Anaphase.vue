<template>
  <div class="content">
    <h1 class="topic">
      <strong>Anaphase</strong>
    </h1>
    <p class="tagline">The seperation of sister chromatids.</p>
    <p class="information">
      Anaphase is the phase where the previously packed chromosomes are now going to be seperated.
      It makes use of the microtubules who are connected to each other to push the poles apart. This
      makes the cell look visibly longer than usual. Both microtubules and kinetochore microtubules
      use <strong>motor proteins</strong> in order to move and seperate chromosomes.
    </p>

    <h2 class="sub-topic">
      <strong>Disjunction</strong>
    </h2>

    <p class="information">
      As the poles are being pushed apart by microtubules,
      <router-link to="/prophase">kinetochore microtubules</router-link> pull the chromosomes toward the poles
      that are being pushed away, which effectively seperates the chromosomes into
      <strong>individual chromosomes</strong>. This process is called
      <strong>disjunction</strong>.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/aa3eddb779598a813e45ad6fd780cb82655758ed.png"
    />

    <p class="img-caption">Role of microtubules and kinetochore microtubules during anaphase</p>

    <h2 class="sub-topic">
      <strong>Nondisjunction</strong>
    </h2>

    <p class="information">
      Nondisjunction is the term that is used when
      <strong>disjunction fails</strong>. This happens because the chromosomes
      fail to seperate from each other. The result of nondisjunction is there will be an
      <strong>uneven number of chromosomes on opposing poles</strong>.
      Nondisjunction leads to mutations, and if it occurs in meiosis can lead
      to down syndrome, turner syndrome and etc in the offspring.
    </p>

    <v-img
      class="img"
      width="30%"
      src="https://study.com/cimages/multimages/16/nondisjunction.png"
    />

    <p class="img-caption">
      Visualization of uneven amount of chromosomes in the daughter cell.
      <br>
      First cell contains 5 chromosomes while the second one contains only 3.
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

