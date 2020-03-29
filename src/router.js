import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Home2 from "./views/Home2.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "vHome",
      component: Home
    },
    {
      path: "/imprint",
      name: "imprint",
      component: () => import("./views/Imprint.vue")
    },
    {
      path: "*",
      component: Home
    },
    {
      path: "/home2",
      name: "vHome2",
      component: Home2
    }
  ]
});
