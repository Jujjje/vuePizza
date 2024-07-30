import CartPage from "src/pages/cart/ui/CartPage.vue";
import { CatalogPage } from "src/pages/catalog";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: CatalogPage },
  { path: "/cart", component: CartPage },
];

export const router = createRouter({ history: createMemoryHistory(), routes });
