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
    </p>

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

      <v-img class="img" src="http://cyberbridge.mcb.harvard.edu/images/mitosis4_2.png"/>
    </p>

    <h2 class="sub-topic">
      <strong>G2 phase</strong>
    </h2>
    <p class="tagline">The cell undergoes growth and organization to prepare for mitosis.</p>
    <p class="information">
      G1 and G2 phases are similar. They both are phases that the cell undergoes to produce more protein to prepare for mitosis.
      G1 occurs prior the S phase and G2 occurs after. Protein is produced, more specifically microtubules that will be needed for
      mitosis.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Interphase extends Vue {

}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #009688;
}
</style>

