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

export default {
  state: () => initialState,
  //Тут може удалити колбек
  getters: {
    //INFO тут у на іде підрахунок чогось, типу загальної вартості і т.д
  },
  mutations,
  actions,
};

// mapState, namespacased?, іменування з назвою модуля і функціїї капсом, винести назву типів в константу
