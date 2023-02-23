import { ActionTree, ActionContext } from "vuex";
import { instance } from "@/services/api-client";
import { RootState } from "@/store";
import { IProduct } from "@/types/product";
import { IProductsState } from ".";
import { ProductsActionsTypes, ProductsMutationsTypes } from "./types";

type ProductsActionContext = ActionContext<IProductsState, RootState>;

const getProductsAsync = async (
  { rootGetters, commit }: ProductsActionContext,
  filter = ""
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
};

export const actions: ActionTree<IProductsState, RootState> = {
  [ProductsActionsTypes.GET_PRODUCTS_ASYNC]: getProductsAsync,
};
