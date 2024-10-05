//confirmdeleteProduct.ts
import { ActionTree } from "vuex";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";
import { deleteProduct } from "../APis/deleteProduct";

export const actions: ActionTree<{ products: ModelsSchemaProduct[]; productToDelete: number | null }, any> = {
  async confirmDelete({ commit, state }) {
    const id = state.productToDelete;

    if (id === null || id === undefined) {
      console.error("No product ID to delete");
      commit("TOGGLE_DELETE_MODAL", false);
      return;
    }

    try {
      await deleteProduct(id);
      commit("REMOVE_PRODUCT_FROM_STATE", id);
      commit("SET_MODAL_DELETE_MESSAGE", "Product successfully deleted.");
    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(`Error deleting product with ID ${id}:`, error);
      commit("SET_MODAL_DELETE_MESSAGE", `Failed to delete product. ${errorMessage}`);
    } finally {
      commit("TOGGLE_DELETE_MODAL", false);
    }
  },
};
