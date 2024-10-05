import { ActionTree } from "vuex";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";
import { HandleAddProduct } from "../handler/addproductHandler";

export const actions: ActionTree<{ products: ModelsSchemaProduct[]; isLoading: boolean }, any> = {
  async addNewProduct({ commit, state }, newProduct: ModelsSchemaProduct) {
    commit("SET_LOADING", true);
    try {
      if (!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.category || !newProduct.image) {
        commit("SET_MODAL_ADD_PRODUCT_MESSAGE", "All fields are required.");
        return;
      }

      const newProductId = Date.now();
      const addedProduct = await HandleAddProduct(state.products, newProductId, newProduct);

      commit("SET_PRODUCTS", [...state.products, addedProduct]);
      commit("SET_MODAL_ADD_PRODUCT_MESSAGE", "Product added successfully.");
    } catch (error) {
      console.error("Error adding new product:", error);
      commit("SET_MODAL_ADD_PRODUCT_MESSAGE", "Error adding product.");
    } finally {
      commit("SET_LOADING", false);
      commit("TOGGLE_ADD_PRODUCT_MODAL", false);
    }
  },
};
