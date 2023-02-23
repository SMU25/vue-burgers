import { ActionTree, ActionContext } from "vuex";
import { instance } from "@/services/api-client";
import { RootState } from "@/store";
import { IOrder } from "@/types/order";
import { IOrdersState } from ".";
import { OrdersActionsTypes, OrdersMutationsTypes } from "./types";

type OrdersActionContext = ActionContext<IOrdersState, RootState>;

const getOrderAsync = async ({ commit }: OrdersActionContext) => {
  try {
    commit(OrdersMutationsTypes.SET_IS_LOADING, true);

    const { data } = await instance.get<IOrder[]>("/orders");

    commit(OrdersMutationsTypes.SET_ORDERS, data);
  } catch (e) {
    console.log(e);
    // CHANGE - Add notification
  } finally {
    commit(OrdersMutationsTypes.SET_IS_LOADING, false);
  }
};

export const actions: ActionTree<IOrdersState, RootState> = {
  [OrdersActionsTypes.GET_ORDERS_ASYNC]: getOrderAsync,
};
