// main.ts
import { createStore } from "vuex";
import { State } from "../models/mdelsShemaState";
import { mutations } from "./mutations";
import { actions } from "./action";

export default createStore<State>({
  state: {
    products: [],
    productToEdit: null,
    productToDelete: null,
    isLoading: false,
    isDeleteModalOpen: false,
    isEditModalOpen: false,
    isModalVisible: false,
    modalDeleteMessage: "",
    searchQuery: "",
    modalUpdateMessage: "",
    modalAddProductMessage: "",
  },

  mutations,
  actions,

  getters: {
    filteredProducts: (state) => {
      if (state.searchQuery) {
        return state.products.filter((product) => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
      }
      return state.products;
    },
  },
});
