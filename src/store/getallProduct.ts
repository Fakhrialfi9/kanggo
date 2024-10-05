import { ActionTree } from "vuex";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";
import { GetAllProduct } from "../APis/getAllProduct";

export const actions: ActionTree<{ products: ModelsSchemaProduct[]; isLoading: boolean }, any> = {
  async loadProducts({ commit }) {
    commit("SET_LOADING", true);
    try {
      const allProducts = await GetAllProduct();
      commit("SET_PRODUCTS", allProducts);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};
