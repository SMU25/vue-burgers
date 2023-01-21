import { ActionTree } from "vuex";
import { instance } from "@/services/api-client";
import { RootState } from "@/store";
import { IProduct } from "@/types/product";
import { IProductsState } from ".";
import { ProductsActionsTypes, ProductsMutationsTypes } from "./types";

export const actions: ActionTree<IProductsState, RootState> = {
  [ProductsActionsTypes.GET_PRODUCTS_ASYNC]: async (
    { rootGetters, commit },
    filter: string = ""
  ) => {
    try {
      commit(ProductsMutationsTypes.SET_IS_LOADING, true);

      const queryParam = rootGetters.isShowAllCategories
        ? ""
        : `?filter=${filter}`;

      const { data } = await instance.get<IProduct[]>(`/products${queryParam}`);

      commit(ProductsMutationsTypes.SET_PRODUCTS, data);
    } catch (e) {
      console.log(e);
      // CHANGE - Add notification
    } finally {
      commit(ProductsMutationsTypes.SET_IS_LOADING, false);
    }
  },
};
