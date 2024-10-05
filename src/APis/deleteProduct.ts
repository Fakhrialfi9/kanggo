//deleteProduct.ts
const API_URL = import.meta.env.VITE_APIS_FAKE_PRODUCT;

export const deleteProduct = async (id: number): Promise<void> => {
  if (id === undefined || id === null) {
    throw new Error("Product ID is null or undefined");
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product with ID ${id}. Status: ${response.status}`);
    }

    console.log(`Product with ID ${id} successfully deleted`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error deleting product: ${error.message}`);
    } else {
      console.error(`Unknown error occurred:`, error);
    }
    throw error;
  }
};
