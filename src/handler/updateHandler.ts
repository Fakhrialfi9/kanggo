import { UpdateProduct } from "../APis/updateProduct";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const HandleUpdate = async (products: ModelsSchemaProduct[], id: number, updatedProduct: ModelsSchemaProduct) => {
  try {
    const result = await UpdateProduct(id, updatedProduct);

    return result;
  } catch (error) {
    console.error(`Error saat mengupdate produk dengan ID ${id}:`, error);
    throw error;
  }
};
