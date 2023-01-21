import { Module } from "vuex";
import { RootState } from "@/store";
import { IProduct } from "@/types/product";
import { mutations } from "./mutations";
import { actions } from "./actions";

export interface IProductsState {
  isLoading: boolean;
  items: IProduct[];
}

const initialState: IProductsState = {
  items: [],
  isLoading: false,
};

const products: Module<IProductsState, RootState> = {
  state: initialState,
  getters: {
    //INFO тут у на іде підрахунок чогось, типу загальної вартості і т.д
  },
  mutations,
  actions,
};

export default products;
