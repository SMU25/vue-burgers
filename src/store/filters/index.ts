import { Module } from "vuex";
import { RootState } from "@/store";
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

const filters: Module<IFiltersState, RootState> = {
  state: initialState,
  getters,
  mutations,
};

export default filters;
