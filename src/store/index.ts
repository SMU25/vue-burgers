import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

export const storeInjectionKey: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
