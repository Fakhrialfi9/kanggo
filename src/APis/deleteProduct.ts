export const deleteProduct = async (id: number): Promise<void> => {
  if (!id) {
    throw new Error("Product ID is null or undefined");
  }

  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete product with ID ${id}. Status: ${response.status}`);
  }

  console.log(`Product with ID ${id} successfully deleted`);
};
