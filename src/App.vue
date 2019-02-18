<template>
  <v-app>
    <v-content>
      <transition name="fade">
        <router-view/>
      </transition>
    </v-content>

    <v-fab-transition>
      <v-btn
        v-if="$route.path !== '/' && $route.path !== '/sources'"
        :color="color"
        @click="next"
        style="margin-bottom: 65px;"
        dark
        fixed
        bottom
        right
        fab
      >
        <v-icon>navigate_next</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-fab-transition>
      <v-btn
        v-if="$route.path === '/faq'"
        :color="color"
        @click="goto(1)"
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

    <v-card>
      <v-bottom-nav :active.sync="currentColor" :color="color" :value="true" fixed dark shift>
        <v-btn dark to="/">
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn dark to="/interphase">
          <span>Interphase</span>
          <v-icon>filter_1</v-icon>
        </v-btn>

        <v-btn dark to="/prophase">
          <span>Prophase</span>
          <v-icon>filter_2</v-icon>
        </v-btn>

        <v-btn dark to="/metaphase">
          <span>Metaphase</span>
          <v-icon>filter_3</v-icon>
        </v-btn>

        <v-btn dark to="/anaphase">
          <span>Anaphase</span>
          <v-icon>filter_4</v-icon>
        </v-btn>

        <v-btn dark to="/telophase">
          <span>Telophase</span>
          <v-icon>filter_5</v-icon>
        </v-btn>

        <v-btn dark to="/faq">
          <span>FAQ</span>
          <v-icon>question_answer</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private currentColor: number = 0;
  private navColors: string[] = [
    "blue",
    "teal",
    "red",
    "orange darken-4",
    "indigo",
    "deep-purple",
    "purple"
  ];
  private routes: string[] = [
    "/",
    "/interphase",
    "/prophase",
    "/metaphase",
    "/anaphase",
    "/telophase",
    "/faq"
  ];

  private get color(): string | undefined {
    const color: string = this.navColors[this.currentColor];
    if (color) {
      return color;
    }
  }

  private next(): void {
    const currentRoute: string = this.$route.path;
    if (!currentRoute || !this.routes.includes(currentRoute)) {
      return;
    }

    const currentIndex: number = this.routes.findIndex(
      (route: string): boolean => route === currentRoute
    );

    if (currentIndex >= this.routes.length - 1) {
      this.$router.push(this.routes[1]);
    } else {
      this.$router.push(this.routes[currentIndex + 1]);
    }
  }

  private goto(where: number): void {
    const to = this.routes[where];
    if (!to) {
      return;
    }

    this.$router.push(to);
  }
}
</script>

<style lang="scss" scoped>
#app {
  // background: white !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.125s ease;
}

.fade-enter-active {
  transition-delay: 0.125s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>