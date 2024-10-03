export const UpdateProduct = async (id: number, updatedProduct: any): Promise<void> => {
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

    console.log(`Product with ID ${id} successfully updated`);
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};
