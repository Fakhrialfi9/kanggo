<script setup lang="ts">
  import {
    Modals,
    DiaglogModals,
    HeaderDiaglogModals,
    TitleDiaglogModals,
    SubheadlineDiaglogModals,
    CallToActionDiaglogModals,
    CancelProductButton,
    DeleteProductButton,
  } from "../assets/style/lib/dialogdeletemodalsStyle.js";
  import { defineProps, defineEmits } from "vue";

  const props = defineProps({
    isVisible: Boolean,
    message: String,
  });

  const emit = defineEmits(["confirm", "cancel"]);

  const cancel = () => {
    emit("cancel");
  };

  const confirm = () => {
    emit("confirm");
  };
</script>

<template>
  <Modals v-if="isVisible">
    <DiaglogModals>
      <HeaderDiaglogModals>
        <TitleDiaglogModals>Are you sure you want to delete this product?</TitleDiaglogModals>
        <SubheadlineDiaglogModals>{{ message }}</SubheadlineDiaglogModals>
      </HeaderDiaglogModals>

      <CallToActionDiaglogModals>
        <CancelProductButton @click="cancel">Cancel</CancelProductButton>
        <DeleteProductButton @click="confirm">Delete</DeleteProductButton>
      </CallToActionDiaglogModals>
    </DiaglogModals>
  </Modals>
</template>
