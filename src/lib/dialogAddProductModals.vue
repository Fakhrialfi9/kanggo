<script setup lang="ts">
  import {
    Modals,
    DiaglogModals,
    HeaderDiaglogModals,
    TitleDiaglogModals,
    SubheadlineDiaglogModals,
    FormEditModalsProduct,
    InputEditModalsProduct,
    InputDescriptionEditModalsProduct,
    CallToActionDiaglogModals,
    CancelProductButton,
    SaveAddProductButton,
  } from "../assets/style/lib/dialogaddproductmodalsStyle.js";
  import { defineProps, defineEmits, ref, watch } from "vue";
  import { ModelsSchemaProduct } from "../models/modelSchemaProduct.js";
  import { AddProduct } from "../APis/getNewProduct";

  const props = defineProps<{
    isVisible: boolean;
    message: string;
    product?: ModelsSchemaProduct;
  }>();

  const productTitle = ref<string>(props.product?.title || "Kanggo");
  const productPrice = ref<number>(Number(props.product?.price) || 100);
  const productDescription = ref<string>(
    props.product?.description || "Product Kanggo",
  );
  const productCategory = ref<string>("Pekerja");
  const productImage = ref<string>("https://i.pravatar.cc");

  const emit = defineEmits(["confirm", "cancel"]);

  watch(
    () => props.isVisible,
    (newValue) => {
      if (!newValue) {
        resetForm();
      }
    },
  );

  const resetForm = () => {
    productTitle.value = props.product?.title || "Kanggo";
    productPrice.value = Number(props.product?.price) || 100;
    productDescription.value = props.product?.description || "Product Kanggo";
    productCategory.value = "Pekerja";
    productImage.value = "https://i.pravatar.cc";
  };

  const cancel = () => {
    emit("cancel");
  };

  const confirm = async () => {
    if (!validateInputs()) return;

    try {
      const newProduct: Omit<ModelsSchemaProduct, "id"> = {
        title: productTitle.value,
        description: productDescription.value,
        price: productPrice.value,
        category: productCategory.value,
        image: productImage.value,
      };

      const addedProduct = await AddProduct(newProduct);
      alert("Product added successfully");
      console.log("Product added successfully:", addedProduct);

      emit("confirm", addedProduct);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  const validateInputs = () => {
    if (
      !productTitle.value ||
      !productDescription.value ||
      !productPrice.value
    ) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };
</script>

<template>
  <Modals v-if="isVisible">
    <DiaglogModals>
      <HeaderDiaglogModals>
        <TitleDiaglogModals>Add New Product</TitleDiaglogModals>
        <SubheadlineDiaglogModals>{{ message }}</SubheadlineDiaglogModals>
      </HeaderDiaglogModals>

      <FormEditModalsProduct @submit.prevent="confirm">
        <InputEditModalsProduct
          required
          v-model="productTitle"
          type="text"
          name="productTitle"
          placeholder="Add Title Product"
          autocomplete="off" />
        <InputEditModalsProduct
          required
          v-model="productPrice"
          type="number"
          name="productPrice"
          placeholder="Add Product Price"
          autocomplete="off" />
        <InputDescriptionEditModalsProduct
          required
          v-model="productDescription"
          name="productDescription"
          placeholder="Add Description Product"
          autocomplete="off" />

        <CallToActionDiaglogModals>
          <CancelProductButton @click="cancel" type="button"
            >Cancel</CancelProductButton
          >
          <SaveAddProductButton type="submit"
            >Add New Product</SaveAddProductButton
          >
        </CallToActionDiaglogModals>
      </FormEditModalsProduct>
    </DiaglogModals>
  </Modals>
</template>
