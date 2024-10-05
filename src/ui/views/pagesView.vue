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

  const openEditModal = (product) => {
    console.log("Opening Edit modal for product:", product);
    store.commit("SET_PRODUCT_TO_EDIT", product);
    store.commit("SET_MODAL_UPDATE_MESSAGE", `Are you sure you want to Edit "${product.title}"?`);
    store.commit("TOGGLE_EDIT_MODAL", true);
  };

  const openDeleteModal = (product) => {
    console.log("Opening delete modal for product ID:", product);
    store.commit("SET_PRODUCT_TO_DELETE", product.id);
    store.commit("SET_MODAL_DELETE_MESSAGE", `Are you sure you want to delete "${product.title}"?`);
    store.commit("TOGGLE_DELETE_MODAL", true);
  };

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
                <EditProductButton @click="openEditModal(product)">Edit</EditProductButton>
                <DeleteProductButton @click="openDeleteModal(product)">Delete</DeleteProductButton>
              </CardButtonCallToActionProduct>
            </CardInformationProduct>
          </CardProduct>
        </WrapCardProduct>
      </Content>

      <DeleteModal
        :isVisible="isDeleteModalOpen"
        :message="store.state.modalDeleteMessage"
        :id="store.state.productToDelete"
        @confirm="() => store.dispatch('confirmDelete', store.state.productToDelete)"
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
