//updateHandler.ts
import { UpdateProduct } from "../APis/updateProduct";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const handleUpdate = async (
  products: ModelsSchemaProduct[],
  id: number,
  updatedProduct: ModelsSchemaProduct,
): Promise<ModelsSchemaProduct[]> => {
  if (!id) {
    throw new Error("Product ID is null or undefined");
  }

  try {
    await UpdateProduct(id, updatedProduct);
    return products.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product));
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};
