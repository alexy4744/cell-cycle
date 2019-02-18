import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sources",
      name: "sources",
      component: () => import(/* webpackChunkName: "sources" */ "./views/Sources.vue")
    },
    {
      path: "/interphase",
      name: "interphase",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "interphase" */ "./views/Interphase.vue")
    },
    {
      path: "/prophase",
      name: "prophase",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "prophase" */ "./views/Prophase.vue")
    },
    {
      path: "/metaphase",
      name: "metaphase",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "metaphase" */ "./views/Metaphase.vue")
    },
    {
      path: "/anaphase",
      name: "anaphase",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "anaphase" */ "./views/Anaphase.vue")
    },
    {
      path: "/telophase",
      name: "telophase",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "telophase" */ "./views/Telophase.vue")
    },
    {
      path: "/404",
      name: "404",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotFound
    }
  ]
});
