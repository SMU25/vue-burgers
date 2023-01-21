import { IProductsState } from ".";

export const PRODUCTS_MUTATIONS_TYPES = {
  SET_IS_LOADING: "products/SET_IS_LOADING",
  SET_PRODUCTS: "products/SET_PRODUCTS",
};
//CHANGE - може змінити назву і видалити приставку продукти + додати ім'я модуля та витягувати mapState екшени і з назвою methods:   ...mapActions('company', ['getCompanies', 'getEmployees'])

export const mutations = {
  [PRODUCTS_MUTATIONS_TYPES.SET_IS_LOADING]: (
    state: IProductsState,
    payload: IProductsState["isLoading"]
  ) => (state.isLoading = payload),

  [PRODUCTS_MUTATIONS_TYPES.SET_PRODUCTS]: (
    state: IProductsState,
    payload: IProductsState["items"]
  ) => (state.items = payload),
};
