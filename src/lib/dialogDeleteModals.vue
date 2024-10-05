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
    id: Number,
  });

  const emit = defineEmits();

  const cancelDelete = () => {
    emit("cancel");
  };

  const confirmDelete = () => {
    if (props.id === null || props.id === undefined) {
      console.error("No product ID to delete");
      return;
    }
    emit("confirm", props.id);
  };
</script>

<template>
  <Modals v-if="isVisible">
    <DiaglogModals>
      <HeaderDiaglogModals>
        <TitleDiaglogModals>Delete Confirmation</TitleDiaglogModals>
        <SubheadlineDiaglogModals>{{ message }}</SubheadlineDiaglogModals>
      </HeaderDiaglogModals>
      <CallToActionDiaglogModals>
        <CancelProductButton @click="cancelDelete">Cancel</CancelProductButton>
        <DeleteProductButton @click="confirmDelete">Delete</DeleteProductButton>
      </CallToActionDiaglogModals>
    </DiaglogModals>
  </Modals>
</template>
