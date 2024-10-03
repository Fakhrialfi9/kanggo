import { ref } from "vue";
import { ModelsSchemaProduct } from "../models/productModels.ts";

export const useHandleUpdate = (products: any) => {
  const handleUpdate = async (id: number, updatedProduct: ModelsSchemaProduct) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error(`Failed to update product with ID ${id}`);
      }

      const updatedData = await response.json();
      // Find the index of the product to update
      const productIndex = products.value.findIndex((product: ModelsSchemaProduct) => product.id === id);
      if (productIndex !== -1) {
        products.value[productIndex] = updatedData;
      }

      console.log(`Product with ID ${id} successfully updated`, updatedData);
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
  };

  return { handleUpdate };
};
