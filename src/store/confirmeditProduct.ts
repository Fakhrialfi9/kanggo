// confirmEdit.ts
import { ActionTree } from "vuex";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";
import { handleUpdate } from "../handler/updateHandler";

export const actions: ActionTree<{ products: ModelsSchemaProduct[] }, any> = {
  async confirmEdit({ commit, state }, updatedProduct: ModelsSchemaProduct) {
    if (!updatedProduct || !updatedProduct.id || !updatedProduct.title || !updatedProduct.description) {
      console.error("Produk tidak valid, semua field harus diisi.");
      return;
    }

    commit("SET_LOADING", true);

    try {
      const result = await handleUpdate(state.products, updatedProduct.id, updatedProduct);

      commit("UPDATE_PRODUCT_IN_STATE", result);

      commit("SET_MODAL_UPDATE_MESSAGE", "Produk berhasil diupdate!");

      console.log("Product updated successfully:", result);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Gagal mengupdate produk:", error.message);
        commit("SET_MODAL_UPDATE_MESSAGE", "Gagal mengupdate produk.");
      } else {
        console.error("Unexpected error:", error);
        commit("SET_MODAL_UPDATE_MESSAGE", "Terjadi kesalahan yang tidak terduga.");
      }
    } finally {
      commit("SET_LOADING", false);
      commit("TOGGLE_EDIT_MODAL", false);
    }
  },
};
