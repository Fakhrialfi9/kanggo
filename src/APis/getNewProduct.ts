import axios from "axios";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

export const AddProduct = async (newProduct: ModelsSchemaProduct): Promise<ModelsSchemaProduct> => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      {
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
        category: newProduct.category,
        image: newProduct.image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status !== 201) {
      throw new Error(`Failed to add product`);
    }

    const addedProduct: ModelsSchemaProduct = response.data;
    console.log(`Product added successfully:`, addedProduct);
    return addedProduct;
  } catch (error) {
    console.error(`Error adding product:`, error);
    throw error;
  }
};
