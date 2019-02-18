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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sources extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";

a {
  display: block;
  margin-bottom: 10px;
  color: black;
}
</style>
