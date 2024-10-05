<!-- dialogAddProductModals.vue -->
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
  import { defineProps, defineEmits, ref } from "vue";
  import { ModelsSchemaProduct } from "../models/modelSchemaProduct.js";
  import { AddProduct } from "../APIs/getNewProduct";

  const props = defineProps<{
    isVisible: boolean;
    message: string;
    product?: ModelsSchemaProduct;
  }>();

  const productTitle = ref<string>(props.product?.title || "Kanggo");
  const productDescription = ref<string>(props.product?.description || "Product Kanggo");
  const productPrice = ref<string>(props.product?.price || "100");
  const productCategory = ref<string>("Pekerja");
  const productImage = ref<string>("https://i.pravatar.cc");

  const emit = defineEmits(["confirm", "cancel"]);

  const cancel = () => {
    emit("cancel");
  };

  const confirm = async () => {
    try {
      const newProduct = {
        title: productTitle.value,
        description: productDescription.value,
        price: productPrice.value,
        category: productCategory.value,
        image: productImage.value,
      };
      productTitle.value = "Kanggo";
      productDescription.value = "Product Kanggo";

      const addedProduct = await AddProduct(newProduct);
      alert("Product added successfully:", addedProduct);
      console.log("Product added successfully:", addedProduct);

      emit("confirm", addedProduct);
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
        <InputEditModalsProduct required v-model="productTitle" type="text" name="productTitle" placeholder="Add Title Product" autocomplete="off" />
        <InputEditModalsProduct
          required
          v-model="productPrice"
          type="number"
          name="productPrice"
          placeholder="Add Title Product"
          autocomplete="off" />

        <InputDescriptionEditModalsProduct
          required
          v-model="productDescription"
          name="productDescription"
          placeholder="Add Description Product"
          autocomplete="off" />

        <CallToActionDiaglogModals>
          <CancelProductButton @click="cancel" type="button">Cancel</CancelProductButton>
          <SaveAddProductButton type="submit">Add New Product</SaveAddProductButton>
        </CallToActionDiaglogModals>
      </FormEditModalsProduct>
    </DiaglogModals>
  </Modals>
</template>
