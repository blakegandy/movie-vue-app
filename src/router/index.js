import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Index from "../views/Index.vue";
import Show from "../views/Show.vue";
import Edit from "../views/Edit.vue";
import New from "../views/New.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  { path: "/signup", name: "Signup", component: Signup },

  { path: "/login", name: "login", component: Login },

  { path: "/logout", name: "logout", component: Logout },

  { path: "/movies", name: "movie-index", component: Index },

  { path: "/movies/:id", name: "movies-show", component: Show },

  { path: "/movies/:id/edit", name: "movies-edit", component: Edit },

  { path: "/movies/new", name: "movies-new", component: New },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
