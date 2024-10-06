<!-- NvabarRightSection.vue -->
<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useStore } from "vuex";
  import { Plus } from "lucide-vue-next";
  import { RightContent, AddProductButton } from "../../../../assets/style/components/navbarStyle.js";
  import AddNewProductModal from "../../../../lib/dialogAddProductModals.vue";

  const store = useStore();
  const isModalVisible = computed(() => store.state.isModalVisible);
  const modalMessage = computed(() => store.state.modalAddProductMessage);

  const productTitle = ref<string>("");
  const productDescription = ref<string>("");

  const openAddProductModals = () => {
    store.commit("TOGGLE_ADD_PRODUCT_MODAL", true);
    store.commit("SET_MODAL_ADD_PRODUCT_MESSAGE", "Please fill in the product details.");
  };
</script>

<template>
  <RightContent>
    <AddProductButton @click="openAddProductModals">Add Product <Plus :size="15" /></AddProductButton>
  </RightContent>

  <AddNewProductModal
    :isVisible="isModalVisible"
    :message="modalMessage"
    @confirm="(newProduct) => store.dispatch('addNewProduct', newProduct)"
    @cancel="store.commit('TOGGLE_ADD_PRODUCT_MODAL', false)" />
</template>
