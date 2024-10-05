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

  const props = defineProps<{
    isVisible: boolean;
    message: string;
    product?: ModelsSchemaProduct;
  }>();

  const productTitle = ref<string>(props.product?.title || "");
  const productDescription = ref<string>(props.product?.description || "");

  const emit = defineEmits(["confirm", "cancel"]);

  const cancel = () => {
    emit("cancel");
  };

  const confirm = async () => {
    emit("confirm", {
      title: productTitle.value,
      description: productDescription.value,
    });

    productTitle.value = "";
    productDescription.value = "";
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
        <InputEditModalsProduct required v-model="productTitle" type="text" name="title" placeholder="Add Title Product" autocomplete="off" />
        <InputDescriptionEditModalsProduct
          required
          v-model="productDescription"
          name="description"
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
