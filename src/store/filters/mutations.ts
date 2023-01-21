import { MutationTree } from "vuex";
import { IFiltersState } from ".";
import { FiltersMutationsTypes } from "./types";

export const mutations: MutationTree<IFiltersState> = {
  [FiltersMutationsTypes.SET_CATEGORY]: (
    state,
    payload: IFiltersState["category"]
  ) => (state.category = payload),
};
