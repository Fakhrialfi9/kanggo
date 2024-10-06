// addproductHandler.ts
import { AddProduct } from "../APIs/getNewProduct";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const HandleAddProduct = async (
  products: ModelsSchemaProduct[],
  id: number,
  newProduct: ModelsSchemaProduct,
): Promise<ModelsSchemaProduct[]> => {
  if (!newProduct) {
    throw new Error("New product data is null or undefined");
  }

  try {
    const addedProduct = await AddProduct(newProduct);
    console.log("Product added successfully:", addedProduct);

    return [...products, addedProduct];
  } catch (error) {
    console.error("Error adding new product:", error);
    throw error;
  }
};
