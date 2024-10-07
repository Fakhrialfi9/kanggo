import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

const API_URL = import.meta.env.VITE_APIS_FAKE_PRODUCT;

export const UpdateProduct = async (
  id: number,
  updatedProduct: ModelsSchemaProduct,
): Promise<ModelsSchemaProduct> => {
  try {
    if (!updatedProduct.title || !updatedProduct.description) {
      throw new Error(
        "Missing required fields: title and description are required.",
      );
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || typeof data !== "object") {
      throw new Error("Invalid response from server.");
    }

    return data as ModelsSchemaProduct;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error updating product with ID ${id}:`, error.message);
      throw new Error(`Failed to update product: ${error.message}`);
    } else {
      console.error(`Unexpected error updating product with ID ${id}:`, error);
      throw new Error(
        "Failed to update product: An unexpected error occurred.",
      );
    }
  }
};
