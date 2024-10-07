import axios from "axios";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

const API_URL = import.meta.env.VITE_APIS_FAKE_PRODUCT;

const cache = new Map<string, ModelsSchemaProduct[]>();
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

export const GetAllProduct = async (): Promise<ModelsSchemaProduct[]> => {
  const cacheKey = "products";

  if (cache.has(cacheKey)) {
    console.log("Returning cached data...");
    return cache.get(cacheKey)!;
  }

  return new Promise<ModelsSchemaProduct[]>((resolve, reject) => {
    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      try {
        const response = await axios.get(`${API_URL}`);

        const formattedData: ModelsSchemaProduct[] = response.data.map(
          (product: any) => ({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
          }),
        );

        cache.set(cacheKey, formattedData);
        resolve(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
        reject(
          error instanceof Error ? error : new Error("Unknown error occurred"),
        );
      }
    }, 300);
  });
};
