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
    SaveEditProductButton,
  } from "../assets/style/lib/dialogupdatemodalsStyle";
  import { defineProps, defineEmits, computed, ref } from "vue";
  import { ModelsSchemaProduct } from "../models/modelSchemaProduct";

  const productForm = ref<HTMLElement | null>(null);

  const props = defineProps<{
    isVisible: boolean;
    message: string;
    product?: ModelsSchemaProduct | null;
  }>();

  const emit = defineEmits(["confirm", "cancel"]);

  const productTitle = computed({
    get: () => props.product?.title || "",
    set: (value: string) => {
      if (props.product) {
        props.product.title = value;
      }
    },
  });

  const productPrice = computed({
    get: () => props.product?.price || "",
    set: (value: number) => {
      if (props.product) {
        props.product.price = value;
      }
    },
  });

  const productDescription = computed({
    get: () => props.product?.description || "",
    set: (value: string) => {
      if (props.product) {
        props.product.description = value;
      }
    },
  });

  const cancel = () => {
    emit("cancel");
  };

  const errorMessage = ref("");

  const confirm = () => {
    console.log("Confirm called");
    console.log("Product Title:", productTitle.value);
    console.log("Product Price:", productPrice.value);
    console.log("Product Description:", productDescription.value);

    if (
      !productTitle.value ||
      !productDescription.value ||
      !productPrice.value
    ) {
      errorMessage.value = "All fields must be filled.";
      return;
    } else {
      errorMessage.value = "";
    }

    const updatedProduct: ModelsSchemaProduct = {
      id: props.product!.id,
      title: productTitle.value,
      price: productPrice.value,
      description: productDescription.value,
      category: "",
      image: "",
    };

    emit("confirm", updatedProduct);
  };
</script>

<template>
  <Modals v-if="isVisible">
    <DiaglogModals>
      <HeaderDiaglogModals>
        <TitleDiaglogModals>Edit Product</TitleDiaglogModals>
        <SubheadlineDiaglogModals>{{ message }}</SubheadlineDiaglogModals>
      </HeaderDiaglogModals>

      <FormEditModalsProduct ref="productForm" @submit.prevent="confirm">
        <InputEditModalsProduct
          v-model="productTitle"
          type="text"
          name="productTitle"
          placeholder="Edit Title"
          autocomplete="off" />
        <InputEditModalsProduct
          v-model="productPrice"
          type="number"
          name="productPrice"
          placeholder="Edit Price"
          autocomplete="off" />
        <InputDescriptionEditModalsProduct
          v-model="productDescription"
          name="productDescription"
          placeholder="Edit Description"
          autocomplete="off" />

        <CallToActionDiaglogModals>
          <CancelProductButton @click="cancel" type="button"
            >Cancel</CancelProductButton
          >
          <SaveEditProductButton type="submit">Save Edit</SaveEditProductButton>
        </CallToActionDiaglogModals>
      </FormEditModalsProduct>
    </DiaglogModals>
  </Modals>
</template>
