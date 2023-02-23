import { Module } from "vuex";
import { RootState } from "@/store";
import { IOrder } from "@/types/order";
import { mutations } from "./mutations";
import { actions } from "./actions";

export interface IOrdersState {
  isLoading: boolean;
  items: IOrder[];
}

const initialState: IOrdersState = {
  isLoading: false,
  items: [],
};

const orders: Module<IOrdersState, RootState> = {
  state: initialState,
  mutations,
  actions,
};

export default orders;
