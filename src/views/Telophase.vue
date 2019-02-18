<template>
  <div class="content">
    <h1 class="topic">
      <strong>Telophase</strong>
    </h1>

    <p class="tagline">The last phase of cell division.</p>

    <p class="information">
      As the cell approaches to the final stage of cell division, the cell will start
      to undo the changes and break down structures that were required for cell division.
      The nuclear envelope reappears and the mitotic spindle starts to break down. Chromosomes
      also start to unpack from their condensed form that was established in
      <router-link to="/prophase">prophase</router-link>.
    </p>

    <h2 class="sub-topic">
      <strong>Cytokinesis</strong>
    </h2>

    <p class="information">
      Cytokinesis is when cytoplasm starts to divide in order to create a 2 new daughter cell. This process
      does not need to wait till telophase starts, it can start during anaphase and finish after
      telophase has completed.
      <br>
      <br>In animal cells, cytokinesis creates a crease on the cleavage line. The cleavage line is determined by
      the
      <strong>contractile ring</strong>, which is made from a protein called actin. This determines where the
      cell will contract and be pinched to seperate the daughter cells from the parent cell. This process will
      create a crease called the
      <strong>clevage furrow</strong>

      .
      <br>
      <br>However in plant cells, the pinching between the daughter and the parent cell does not work, as
      plants have a cell wall which is much stiffer than a cell membrane. In order for plants to
      seperate from its daughter cells, they create a
      <strong>cell plate</strong> which is basically
      a wall that seperates the parent and daughter cell and eventually completely unattaching the
      daughter cells from the parent.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/f099142d1f9c234ff397699b9085a84f678116bc.png"
    />

    <p class="information" style="margin-top: 70px">
      Once cytokinesis is complete, the process of cell division is complete and the new cells will carry out
      cell division again if it ever needs to, why is why it is a cycle.
    </p>

    <v-img
      class="img"
      src="https://cdn.kastatic.org/ka-perseus-images/0d7be915e98cf5b476ee5c27440871007d9ec3b4.png"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Telophase extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a,
strong {
  color: #673ab7;
}
</style>

