import { ActionTree } from "vuex";
import { State } from "../models/mdelsShemaState";
import { actions as loadProductsActions } from "./getallProduct";
import { actions as addNewProductActions } from "./addnewProduct";
import { actions as confirmEditActions } from "./confirmeditProduct";
import { actions as confirmDeleteActions } from "./confirmdeleteProduct";

export const actions: ActionTree<State, any> = {
  ...loadProductsActions,
  ...addNewProductActions,
  ...confirmEditActions,
  ...confirmDeleteActions,

  performSearch({ commit }, query) {
    commit("SET_SEARCH_QUERY", query);
  },
};
