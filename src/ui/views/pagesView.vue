<script setup lang="ts">
  import { onMounted, computed } from "vue";
  import { useStore } from "vuex";
  import { Container } from "../../base/style/containerStyle.js";
  import {
    Main,
    Content,
    FormSearchProduct,
    TitleFormSearchProduct,
    SearchBarsProduct,
    WrapCardProduct,
    CardProduct,
    CardImageProduct,
    ImageProduct,
    CardInformationProduct,
    CardTitleProduct,
    CardDescriptionProduct,
    CardButtonCallToActionProduct,
    EditProductButton,
    DeleteProductButton,
  } from "../../assets/style/views/pageStyle.js";
  import DeleteModal from "../../lib/dialogDeleteModals.vue";
  import EditModal from "../../lib/dialogEditModals.vue";

  const store = useStore();

  const searchQuery = computed(() => store.state.searchQuery);
  const products = computed(() => store.getters.filteredProducts);
  const isDeleteModalOpen = computed(() => store.state.isDeleteModalOpen);
  const isEditModalOpen = computed(() => store.state.isEditModalOpen);

  const openEditModal = (product, productName: string) => {
    store.commit("SET_PRODUCT_TO_EDIT", product);
    store.commit("SET_MODAL_UPDATE_MESSAGE", `Are you sure you want to Edit "${productName}"? .`);
    store.commit("TOGGLE_EDIT_MODAL", true);
  };

  const openDeleteModla = (productId: number, productName: string) => {
    store.commit("SET_PRODUCT_TO_DELETE", productId);
    store.commit(
      "SET_MODAL_DELETE_MESSAGE",
      `Are you sure you want to delete "${productName}"? If you want to delete, click Delete; if not, click Cancel.`,
    );
    store.commit("TOGGLE_DELETE_MODAL", true);
  };

  // Load products on mount
  onMounted(() => {
    store.dispatch("loadProducts");
  });
</script>

<template>
  <Main>
    <Container>
      <Content>
        <FormSearchProduct>
          <TitleFormSearchProduct>Product List</TitleFormSearchProduct>
          <SearchBarsProduct v-model="searchQuery" type="text" placeholder="Search product..." />
        </FormSearchProduct>

        <WrapCardProduct>
          <CardProduct v-for="product in products" :key="product.id">
            <CardImageProduct>
              <ImageProduct :src="product.image" :alt="product.title" />
            </CardImageProduct>
            <CardInformationProduct>
              <CardTitleProduct>{{ product.title }}</CardTitleProduct>
              <CardDescriptionProduct>{{ product.description }}</CardDescriptionProduct>
              <CardButtonCallToActionProduct>
                <EditProductButton @click="openEditModal(product.id, product.title)">Edit</EditProductButton>
                <DeleteProductButton @click="() => openDeleteModla(product.id, product.title)">Delete</DeleteProductButton>
              </CardButtonCallToActionProduct>
            </CardInformationProduct>
          </CardProduct>
        </WrapCardProduct>
      </Content>

      <DeleteModal
        :isVisible="isDeleteModalOpen"
        :message="store.state.modalDeleteMessage"
        :productId="store.state.productToDelete"
        @confirm="store.dispatch('confirmDelete', store.state.productToDelete)"
        @cancel="store.commit('TOGGLE_DELETE_MODAL', false)" />

      <EditModal
        :isVisible="isEditModalOpen"
        :message="store.state.modalUpdateMessage"
        :product="store.state.productToEdit"
        @confirm="store.dispatch('confirmEdit', store.state.productToEdit)"
        @cancel="store.commit('TOGGLE_EDIT_MODAL', false)" />
    </Container>
  </Main>
</template>
