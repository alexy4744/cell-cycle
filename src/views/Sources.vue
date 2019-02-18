<template>
  <div class="content">
    <h1 class="topic">
      <strong>Sources</strong>
    </h1>
    <a
      class="information"
      href="https://www.khanacademy.org/science/biology/cellular-molecular-biology/mitosis/a/phases-of-mitosis"
    >https://www.khanacademy.org/science/biology/cellular-molecular-biology/mitosis/a/phases-of-mitosis</a>
    <a
      class="information"
      href="https://www.nature.com/scitable/definition/spindle-fibers-304"
    >https://www.nature.com/scitable/definition/spindle-fibers-304</a>
    <a
      class="information"
      href="http://cyberbridge.mcb.harvard.edu/mitosis_4.html"
    >http://cyberbridge.mcb.harvard.edu/mitosis_4.html</a>
    <a
      class="information"
      href="https://www.nature.com/scitable/definition/metaphase-249"
    >https://www.nature.com/scitable/definition/metaphase-249</a>
    <a
      class="information"
      href="https://study.com/academy/lesson/anaphase-definition-lesson-quiz.html"
    >https://study.com/academy/lesson/anaphase-definition-lesson-quiz.html</a>
    <a
      class="information"
      href="https://www.sparknotes.com/biology/cellreproduction/mitosis/section3/"
    >https://www.sparknotes.com/biology/cellreproduction/mitosis/section3/</a>
    
    <a
      class="information"
      href="https://www.khanacademy.org/science/biology/cellular-molecular-biology/stem-cells-and-cancer/a/cell-cycle-checkpoints-article/"
    >https://www.khanacademy.org/science/biology/cellular-molecular-biology/stem-cells-and-cancer/a/cell-cycle-checkpoints-article/</a>
    
    <a class="information"
      href="https://www.yourgenome.org/facts/mitosis-versus-meiosis"
    >https://www.yourgenome.org/facts/mitosis-versus-meiosis</a>
    
    <a
      class="information"
      href="https://www.nature.com/scitable/topicpage/replication-and-distribution-of-dna-during-meiosis-6524853"
    >https://www.nature.com/scitable/topicpage/replication-and-distribution-of-dna-during-meiosis-6524853</a>

    <v-fab-transition>
      <v-btn
        color="#2196f3"
        @click="$router.push('/')"
        style="margin-bottom: 65px;"
        dark
        fixed
        bottom
        right
        fab
      >
        <v-icon>navigate_before</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sources extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

strong {
  color: #2196f3;
}

a {
  display: block;
  margin-bottom: 10px;
}
</style>
