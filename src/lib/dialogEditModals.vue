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
  import { defineProps, defineEmits, computed } from "vue";
  import { ModelsSchemaProduct } from "../models/productModels.js";

  const props = defineProps<{
    isVisible: boolean;
    message: string;
    product?: ModelsSchemaProduct;
  }>();

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

  const emit = defineEmits(["confirm", "cancel"]);

  const cancel = () => {
    emit("cancel");
  };

  const confirm = ($event: MouseEvent) => {
    $event.preventDefault();
    emit("confirm");
  };
</script>

<template>
  <Modals v-if="isVisible">
    <DiaglogModals>
      <HeaderDiaglogModals>
        <TitleDiaglogModals>Edit Product</TitleDiaglogModals>
        <SubheadlineDiaglogModals>{{ message }}</SubheadlineDiaglogModals>
      </HeaderDiaglogModals>

      <FormEditModalsProduct>
        <InputEditModalsProduct v-model="productTitle" type="text" name="title" placeholder="Edit Title" autocomplete="off" />
        <InputDescriptionEditModalsProduct v-model="productDescription" name="description" placeholder="Edit Description" autocomplete="off" />

        <CallToActionDiaglogModals>
          <CancelProductButton @click="cancel">Cancel</CancelProductButton>
          <SaveEditProductButton @click="confirm">Save Edit</SaveEditProductButton>
        </CallToActionDiaglogModals>
      </FormEditModalsProduct>
    </DiaglogModals>
  </Modals>
</template>
