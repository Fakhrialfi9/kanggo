import { AddProduct } from "../APis/getNewProduct";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const HandleAddProduct = async (products: ModelsSchemaProduct[], newProduct: ModelsSchemaProduct): Promise<ModelsSchemaProduct> => {
  try {
    const addedProduct = await AddProduct(newProduct);
    products.push(addedProduct);
    console.log("Updated products after addition:", products);
    return addedProduct;
  } catch (error) {
    console.error("Error adding new product:", error);
    throw error;
  }
};
