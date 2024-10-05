import axios from "axios";
import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

const API_URL = import.meta.env.VITE_APIS_FAKE_PRODUCT;

export const AddProduct = async (newProduct: ModelsSchemaProduct): Promise<ModelsSchemaProduct> => {
  !API_URL;

  try {
    const response = await axios.post(
      API_URL,
      {
        id: newProduct.id,
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
