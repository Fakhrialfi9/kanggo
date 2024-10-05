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
  } from "../assets/style/lib/dialogupdatemodalsStyle.js";
  import { defineProps, defineEmits, computed, ref } from "vue";
  import { ModelsSchemaProduct } from "../models/modelSchemaProduct.js";

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
    if (!productTitle.value || !productDescription.value) {
      errorMessage.value = "All fields must be filled.";
      return;
    } else {
      errorMessage.value = "";
    }

    const updatedProduct: ModelsSchemaProduct = {
      id: props.product!.id,
      title: productTitle.value,
      description: productDescription.value,
      price: 0,
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
        <InputEditModalsProduct v-model="productTitle" type="text" name="title" placeholder="Edit Title" autocomplete="off" />
        <InputDescriptionEditModalsProduct v-model="productDescription" name="description" placeholder="Edit Description" autocomplete="off" />

        <CallToActionDiaglogModals>
          <CancelProductButton @click="cancel" type="button">Cancel</CancelProductButton>
          <SaveEditProductButton type="submit">Save Edit</SaveEditProductButton>
        </CallToActionDiaglogModals>
      </FormEditModalsProduct>
    </DiaglogModals>
  </Modals>
</template>
