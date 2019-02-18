<template>
  <div class="content">
    <h1 class="topic">
      <strong>Interphase</strong>
    </h1>
    <p class="tagline">The phase where the cell prepares for cell division.</p>
    <p class="information">
      Interphase is the stage where the cell spends most of its life in. It is the stage where it cells prepares
      itself for the next division. Within this stage, there are 3 phases that the cell goes through while in interphase.
    </p>

    <h2 class="sub-topic">
      <strong>G1 phase</strong>
    </h2>
    <p class="tagline">Phase where the cell begins to grow larger and copy organelles.</p>
    <p class="information">
      <strong>G1 phase</strong> is the first phase where the cell prepares for mitosis by undergoing cell growth by producing protein.
      The cell does not proceed to the S phase if it doesn't meet all the growth factors. Instead, it will go back to the
      <strong>G0 phase</strong>, where the cell stops preparing to divide unless it is required to attempt dividing again for specific reasons.
      This is regulates the process of cell cycle as it checks whether the cell has enough nutrients and is big enough to divide. It also
      checks whether the DNA has been damaged or not before proceeding to the S phase.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/9c6a08e9311df5529c5899ec3639a29048509e44.png"
    />

    <h2 class="sub-topic">
      <strong>S phase</strong>
    </h2>
    <p class="tagline">The phase where DNA and the centrosome are replicated.</p>
    <p class="information">
      The S phase is the second step of interphase. During this phase, DNA is replicated and packaged into chromosome, where
      <strong>each chromosome has 2 sister chromatids</strong>. Centrosomes, are also duplicated as they are needed for the
      mitotic spindle during
      <router-link to="/prophase">prophase</router-link>. By the end of S phase, there will be
      <strong>double the amount of DNA</strong> and the cell will proceed to the G2 phase.
    </p>

    <v-img class="img" src="http://cyberbridge.mcb.harvard.edu/images/mitosis4_2.png"/>

    <h2 class="sub-topic">
      <strong>G2 phase</strong>
    </h2>
    <p class="tagline">The cell undergoes growth and organization to prepare for mitosis.</p>
    <p class="information">
      G1 and G2 phases are similar. They both are phases that the cell undergoes to produce more protein to prepare for mitosis.
      G1 occurs prior the S phase and G2 occurs after. Protein is produced, more specifically microtubules that will be needed for
      mitosis. The G2 phase also checks again whether the DNA is damaged or not and to ensure that it has fully copied the DNA.
      If there is a problem with the DNA, the cell either has to fix it, or else it will self-destruct. Self destruction of a cell
      is called
      <strong>apoptosis</strong>. By ensuring the validity of the DNA, it significantly helps prevent mutations and cancer
      in offspring cells.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/3af02c1c6486f416ccaa4c328232fab788639a2c.png"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Interphase extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #009688;
}
</style>

