import { deleteProduct } from "../APis/deleteProduct";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const handleDelete = async (
  products: ModelsSchemaProduct[],
  id: number,
): Promise<ModelsSchemaProduct[]> => {
  if (!id) {
    throw new Error("Product ID is null or undefined");
  }

  try {
    await deleteProduct(id);
    return products.filter((product) => product.id !== id);
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
