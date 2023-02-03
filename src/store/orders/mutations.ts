import { MutationTree } from "vuex";
import { IOrdersState } from ".";
import { OrdersMutationsTypes } from "./types";

export const mutations: MutationTree<IOrdersState> = {
  [OrdersMutationsTypes.SET_IS_LOADING]: (
    state,
    payload: IOrdersState["isLoading"]
  ) => (state.isLoading = payload),

  [OrdersMutationsTypes.SET_ORDERS]: (state, payload: IOrdersState["items"]) =>
    (state.items = payload),
};
