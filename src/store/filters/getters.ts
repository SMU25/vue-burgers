import { MENU_CATEGORIES } from "@/constants/categories";
import { IFiltersState } from "./";

export const getters = {
  isShowAllCategories: ({ category }: IFiltersState): boolean =>
    category.id === MENU_CATEGORIES[0].id,
};

//CHANGE - типізувати гетери
