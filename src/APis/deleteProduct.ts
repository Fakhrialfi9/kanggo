export const DeleteProduct = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product with ID ${id}`);
    }

    console.log(`Product with ID ${id} successfully deleted`);
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
