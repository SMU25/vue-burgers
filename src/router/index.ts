import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { PATHNAMES } from "@/constants/routes";
import Home from "@/views/Home.vue";
import Orders from "@/views/Orders.vue";
import Cart from "@/views/Cart.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: PATHNAMES.HOME,
    name: "home",
    component: Home,
  },
  {
    path: PATHNAMES.ORDERS,
    name: "orders",
    component: Orders,
  },
  {
    path: PATHNAMES.CART,
    name: "cart",
    component: Cart,
  },
  {
    path: PATHNAMES.NOT_FOUND,
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
