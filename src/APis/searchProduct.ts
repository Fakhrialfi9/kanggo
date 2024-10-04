import axios from "axios";
import { ModelsSchemaProduct } from "../models/productModels.ts";

export const searchProduct = async (productName: string): Promise<ModelsSchemaProduct[]> => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products?title_like=${productName}`);
    return response.data as ModelsSchemaProduct[];
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Failed to search products");
  }
};
