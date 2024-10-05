import axios from "axios";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

const API_URL = import.meta.env.VITE_APIS_FAKE_PRODUCT;

export const searchProduct = async (productName: string): Promise<ModelsSchemaProduct[]> => {
  try {
    const response = await axios.get(API_URL);

    const filteredProducts = response.data.filter((product: ModelsSchemaProduct) => product.title.toLowerCase().includes(productName.toLowerCase()));

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Failed to search products");
  }
};
