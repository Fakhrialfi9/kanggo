import axios from "axios";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const searchProduct = async (productName: string): Promise<ModelsSchemaProduct[]> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const filteredProducts = response.data.filter((product: ModelsSchemaProduct) => product.title.toLowerCase().includes(productName.toLowerCase()));
    return filteredProducts;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Failed to search products");
  }
};
