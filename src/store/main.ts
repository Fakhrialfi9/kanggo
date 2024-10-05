import { createStore } from "vuex";
import { State } from "../models/mdelsShemaState";
import { actions as loadProductsActions } from "./loadProduct";
import { actions as searchProductsActions } from "./searchProduct";
import { actions as addNewProductActions } from "./addnewProduct";
import { actions as confirmEditActions } from "./confirmeditProduct";
import { actions as confirmDeleteActions } from "./confirmdeleteProduct";

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

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_PRODUCT_TO_EDIT(state, product) {
      state.productToEdit = product;
    },
    SET_PRODUCT_TO_DELETE(state, id: number | null) {
      state.productToDelete = id;
    },
    SET_MODAL_DELETE_MESSAGE(state, message) {
      state.modalDeleteMessage = message;
    },
    SET_MODAL_UPDATE_MESSAGE(state, message) {
      state.modalUpdateMessage = message;
    },
    TOGGLE_DELETE_MODAL(state, isOpen) {
      state.isDeleteModalOpen = isOpen;
    },
    TOGGLE_EDIT_MODAL(state, isOpen) {
      state.isEditModalOpen = isOpen;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    TOGGLE_ADD_PRODUCT_MODAL(state, isVisible) {
      state.isModalVisible = isVisible;
    },
    SET_MODAL_ADD_PRODUCT_MESSAGE(state, message) {
      state.modalAddProductMessage = message;
    },
    UPDATE_PRODUCT_IN_STATE(state, updatedProduct) {
      const index = state.products.findIndex((product) => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    REMOVE_PRODUCT_FROM_STATE(state, productId) {
      state.products = state.products.filter((product) => product.id !== productId);
    },
  },

  actions: {
    ...loadProductsActions,
    ...searchProductsActions,
    ...addNewProductActions,
    ...confirmEditActions,
    ...confirmDeleteActions,
  },

  getters: {
    filteredProducts: (state) => {
      if (state.searchQuery) {
        return state.products.filter((product) => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
      }
      return state.products;
    },
  },
});
