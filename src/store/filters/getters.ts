import { GetterTree } from "vuex";
import { RootState } from "@/store";
import { MENU_CATEGORIES } from "@/constants/categories";
import { IFiltersState } from "./";

export const getters: GetterTree<IFiltersState, RootState> = {
  isShowAllCategories: ({ category }) => category.id === MENU_CATEGORIES[0].id,
};
