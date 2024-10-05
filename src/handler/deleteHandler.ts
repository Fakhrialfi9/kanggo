//deleteHandler.ts
import { deleteProduct } from "../APis/deleteProduct";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const handleDelete = async (products: ModelsSchemaProduct[], productId: number): Promise<ModelsSchemaProduct[]> => {
  if (!productId) {
    throw new Error("Product ID is null or undefined");
  }

  try {
    await deleteProduct(productId);
    return products.filter((product) => product.id !== productId);
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    throw error;
  }
};
