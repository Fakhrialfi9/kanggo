import { DeleteProduct } from "../APis/deleteProduct.ts";
import { ModelsSchemaProduct } from "../models/productModels.ts";
import { ref } from "vue";

export const useHandleDelete = (products: any) => {
  const handleDelete = async (id: number) => {
    try {
      await DeleteProduct(id);
      products.value = products.value.filter((product: ModelsSchemaProduct) => product.id !== id);
      console.log(`Product with ID ${id} has been deleted.`);
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
    }
  };

  return { handleDelete };
};
