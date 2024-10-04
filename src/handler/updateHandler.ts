import { ModelsSchemaProduct } from "../models/productModels.ts";

export const HandleUpdate = async (products: any, id: number, updatedData: ModelsSchemaProduct) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update product with ID ${id}`);
    }

    const updatedProduct = await response.json();
    const productIndex = products.value.findIndex((product: ModelsSchemaProduct) => product.id === id);
    if (productIndex !== -1) {
      products.value[productIndex] = updatedProduct;
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
