// updateProduct.ts
import axios from "axios";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

const API_URL = import.meta.env.VITE_APIS_FAKE_PRODUCT;

export const UpdateProduct = async (id: number, updatedProduct: ModelsSchemaProduct): Promise<ModelsSchemaProduct> => {
  try {
    if (!updatedProduct.title || !updatedProduct.description) {
      throw new Error("Missing required fields: title and description are required.");
    }

    const response = await axios.put(`${API_URL}/${id}`, updatedProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.data || typeof response.data !== "object") {
      throw new Error("Invalid response from server.");
    }

    return response.data as ModelsSchemaProduct;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error updating product with ID ${id}:`, error.message);
      throw new Error(`Failed to update product: ${error.message}`);
    } else {
      console.error(`Unexpected error updating product with ID ${id}:`, error);
      throw new Error("Failed to update product: An unexpected error occurred.");
    }
  }
};
