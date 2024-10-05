import { ActionTree } from "vuex";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";
import { searchProduct } from "../APis/searchProduct";
import { GetAllProduct } from "../APis/getAllProduct";

export const actions: ActionTree<{ products: ModelsSchemaProduct[]; searchQuery: string }, any> = {
  async searchProducts({ commit, state }) {
    if (!state.searchQuery) {
      commit("SET_PRODUCTS", await GetAllProduct());
    } else {
      try {
        const searchResults = await searchProduct(state.searchQuery);
        commit("SET_PRODUCTS", searchResults);
      } catch (error) {
        console.error("Product search error:", error);
      }
    }
  },
};
