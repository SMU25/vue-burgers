import { MENU_CATEGORIES } from "@/constants/categories";
import { ICategory } from "@/types/category";
import { getters } from "./getters";
import { mutations } from "./mutations";

export interface IFiltersState {
  category: ICategory;
}

const initialState: IFiltersState = {
  category: MENU_CATEGORIES[0],
};

export default {
  state: () => initialState,
  getters,
  mutations,
  actions: {},
};
