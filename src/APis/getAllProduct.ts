import { ModelsSchemaProduct } from "../models/productModels.ts";

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
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const formattedData = data.map((product: any) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          image: product.image,
        }));

        cache.set(cacheKey, formattedData);
        resolve(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
        reject(error);
      }
    }, 300);
  });
};
