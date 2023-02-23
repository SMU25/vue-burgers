import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import filters, { IFiltersState } from "./filters";
import products, { IProductsState } from "./products";
import orders, { IOrdersState } from "./orders";

export interface RootState {
  products: IProductsState;
  filters: IFiltersState;
  orders: IOrdersState;
}

export const storeInjectionKey: InjectionKey<Store<RootState>> = Symbol();

const store = createStore<RootState>({
  modules: {
    products,
    filters,
    orders,
  },
});

export default store;
