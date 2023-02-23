import { MutationTree } from "vuex";
import { IProductsState } from ".";
import { ProductsMutationsTypes } from "./types";

export const mutations: MutationTree<IProductsState> = {
  [ProductsMutationsTypes.SET_IS_LOADING]: (
    state,
    payload: IProductsState["isLoading"]
  ) => (state.isLoading = payload),

  [ProductsMutationsTypes.SET_PRODUCTS]: (
    state,
    payload: IProductsState["items"]
  ) => (state.items = payload),
};
