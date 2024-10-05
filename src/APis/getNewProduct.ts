// getNewProduct.ts
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

const API_URL = "https://fakestoreapi.com/products";

export const AddProduct = async (newProduct: Omit<ModelsSchemaProduct, "id">): Promise<ModelsSchemaProduct> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`Failed to add product: ${response.statusText}`);
    }

    const addedProduct: ModelsSchemaProduct = await response.json();
    console.log(`Product added successfully:`, addedProduct);
    return addedProduct;
  } catch (error) {
    console.error(`Error adding product:`, error);
    throw error;
  }
};
