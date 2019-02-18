<template>
  <div class="content">
    <h1 class="topic">
      <strong>Prophase</strong>
    </h1>

    <p class="tagline">
      The phase where the cell begins to break itself down to form new structures in favor of
      mitosis.
    </p>

    <p class="information">
      Prophase is the stage where the cell loses its nucleolus and chromosomes become tightly
      and condensely packed together. By condensing chromosomes, you can see them clearly now
      as they are packed together so tightly unlike decondensed chromosomes.
    </p>

    <h2 class="sub-topic">
      <strong>Mitotic Spindle</strong>
    </h2>

    <p class="information">
      The mitotic spindle is extremely important during mitosis. It is used to transport chromosomes
      and are made with centrosomes. Centrosomes are made from microtubules, which are composed of the
      protein, tubulin. This is why the cell needed to make more protein during
      <router-link to="/interphase">interphase</router-link> as they are used to make one of the most
      important structures of mitosis. As prophase continues, the nucleolus breaks down, where the packed
      chromosomes are released and the mitotic spindle will start to bind to chromosomes.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/28bb23d0a9f1dc1e0be333eaab8808a014120c8d.png"
    />

    <h2 class="sub-topic">
      <strong>Microtubules Binding</strong>
    </h2>

    <p class="information">
      Microtubules bind in order to allow the mitotic spindle to move and organize during for
      <router-link to="/metaphase">metaphase</router-link>. They can bind near the center of the chromosome
      as they are the strongest point to bind to. These microtubules are called kinetochore microtubules
      because the strongest point of the chromosome is made from the protein, kinetochore. However, not all
      microtubules bind to chromosomes. Some microtubules extend and bind to a microtubule on the opposing pole
      in order to stabilize the mitotic spindle.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/e606653dc9793b3a29b399553d252e06d2586658.png"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Prophase extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #f44336;
}
</style>

