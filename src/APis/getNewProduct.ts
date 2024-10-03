import { ModelsSchemaProduct } from "../models/productModels.ts";

export const AddProduct = async (newProduct: ModelsSchemaProduct): Promise<void> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`Failed to add product`);
    }

    const addedProduct = await response.json();
    console.log(`Product added successfully:`, addedProduct);
  } catch (error) {
    console.error(`Error adding product:`, error);
    throw error;
  }
};
