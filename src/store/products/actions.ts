import { ActionContext } from "vuex";
import { instance } from "@/services/api-client";
import { RootState } from "@/store";
import { IProductsState } from ".";
import { PRODUCTS_MUTATIONS_TYPES } from "./mutations";
import { IProduct } from "@/types/product";

export const PRODUCTS_ACTIONS_TYPES = {
  GET_PRODUCTS_ASYNC: "products/GET_PRODUCTS_ASYNC",
};

//CHANGE - змінити типи для екшенів,гетерів і мутацій, щоб можна було використовувати 1 тип для кількох . Нпракилад це : ActionContext<IProductsState, RootState> в 1 тип і інші так само , просто задати тип для кожного елемента і , щоб він юзався

export const actions = {
  [PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS_ASYNC]: async (
    { rootGetters, commit }: ActionContext<IProductsState, RootState>,
    filter: string = ""
  ) => {
    try {
      commit(PRODUCTS_MUTATIONS_TYPES.SET_IS_LOADING, true);

      const queryParam = rootGetters.isShowAllCategories
        ? ""
        : `?filter=${filter}`;

      const { data } = await instance.get<IProduct[]>(`/products${queryParam}`);

      commit(PRODUCTS_MUTATIONS_TYPES.SET_PRODUCTS, data);
    } catch (e) {
      console.log(e);
    } finally {
      commit(PRODUCTS_MUTATIONS_TYPES.SET_IS_LOADING, false);
    }
  },
};
