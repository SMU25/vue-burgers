import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import filters, { IFiltersState } from "./filters";
import products, { IProductsState } from "./products";

export interface RootState {
  products: IProductsState;
  filters: IFiltersState;
}

export const storeInjectionKey: InjectionKey<Store<RootState>> = Symbol();

const store = createStore<RootState>({
  modules: {
    products,
    filters,
  },
});

export default store;
