import { ActionTree } from "vuex";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";
import { handleUpdate } from "../handler/updateHandler";

export const actions: ActionTree<{ products: ModelsSchemaProduct[] }, any> = {
  async confirmEdit({ commit, state }, updatedProduct: ModelsSchemaProduct) {
    if (
      !updatedProduct ||
      !updatedProduct.id ||
      !updatedProduct.title ||
      !updatedProduct.description
    ) {
      console.error("Invalid product, all fields must be filled.");
      commit("SET_MODAL_UPDATE_MESSAGE", "All fields must be filled.");
      return;
    }

    commit("SET_LOADING", true);

    try {
      const result = await handleUpdate(
        state.products,
        updatedProduct.id,
        updatedProduct,
      );

      const updatedProducts = Array.isArray(result) ? result : [result];
      const updatedProductDetails = updatedProducts.find(
        (product) => product.id === updatedProduct.id,
      );

      if (updatedProductDetails) {
        commit("UPDATE_PRODUCT_IN_STATE", updatedProductDetails);

        commit("SET_MODAL_UPDATE_MESSAGE", "Product updated successfully!");

        console.log("Product updated successfully:", updatedProductDetails);
        console.log("New Title:", updatedProductDetails.title);
        console.log("New Description:", updatedProductDetails.description);
        alert(`Product updated successfully`);
      } else {
        console.error("Product not found after update.");
        commit("SET_MODAL_UPDATE_MESSAGE", "Product not found after update.");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to update product:", error.message);
        commit("SET_MODAL_UPDATE_MESSAGE", "Failed to update product.");
      } else {
        console.error("Unexpected error:", error);
        commit("SET_MODAL_UPDATE_MESSAGE", "An unexpected error occurred.");
      }
    } finally {
      commit("SET_LOADING", false);
      commit("TOGGLE_EDIT_MODAL", false);
    }
  },
};
