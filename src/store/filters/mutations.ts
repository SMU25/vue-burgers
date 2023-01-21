import { IFiltersState } from ".";

export const FILTERS_MUTATIONS_TYPES = {
  SET_CATEGORY: "filters/SET_CATEGORY",
};
//CHANGE - може змінити назву і видалити приставку продукти + додати ім'я модуля та витягувати mapState екшени і з назвою methods:   ...mapActions('company', ['getCompanies', 'getEmployees'])

export const mutations = {
  [FILTERS_MUTATIONS_TYPES.SET_CATEGORY]: (
    state: IFiltersState,
    payload: IFiltersState["category"]
  ) => (state.category = payload),
};
