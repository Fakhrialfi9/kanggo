import { DeleteProduct } from "../APis/deleteProduct.ts";
import { ModelsSchemaProduct } from "../models/productModels.ts";

export const HandleDelete = async (products: any, id: number) => {
  try {
    // Call API to delete the product
    await DeleteProduct(id); // Ensure this API call works

    // Filter out the deleted product from the local state
    products.value = products.value.filter((product: ModelsSchemaProduct) => product.id !== id);
    console.log("Updated products after deletion:", products.value); // Check remaining products
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
  }
};
