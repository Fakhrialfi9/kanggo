<!-- pagesView.vue -->
<script setup lang="ts">
  import { onMounted, computed } from "vue";
  import { useStore } from "vuex";
  import { debounce } from "lodash";
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
  const filteredProducts = computed(() => store.getters.filteredProducts);
  const products = computed(() => store.getters.filteredProducts);
  const isDeleteModalOpen = computed(() => store.state.isDeleteModalOpen);
  const isEditModalOpen = computed(() => store.state.isEditModalOpen);

  const performSearch = (value) => {
    store.dispatch("performSearch", value);
  };

  const handleSearch = debounce((value) => {
    store.commit("SET_SEARCH_QUERY", value);
  }, 300);

  const openEditModal = (product) => {
    console.log("Opening Edit modal for product:", product);
    store.commit("SET_PRODUCT_TO_EDIT", product);
    store.commit("SET_MODAL_UPDATE_MESSAGE", `Are you sure you want to edit "${product.title}"?`);
    store.commit("TOGGLE_EDIT_MODAL", true);
  };

  const openDeleteModal = (product) => {
    console.log("Opening Delete modal for product ID:", product);
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
          <TitleFormSearchProduct>Search</TitleFormSearchProduct>
          <SearchBarsProduct :value="searchQuery" type="text" placeholder="Search product..." @input="(event) => performSearch(event.target.value)" />
        </FormSearchProduct>

        <WrapCardProduct>
          <CardProduct v-for="product in filteredProducts" :key="product.id">
            <CardImageProduct>
              <ImageProduct :src="product.image" :alt="product.title" />
            </CardImageProduct>
            <CardInformationProduct>
              <CardTitleProduct>{{ product.title }}</CardTitleProduct>
              <CardTitleProduct>{{ product.price }}</CardTitleProduct>
              <CardDescriptionProduct>{{ product.description }}</CardDescriptionProduct>
              <CardButtonCallToActionProduct>
                <EditProductButton @click="openEditModal(product)">Edit</EditProductButton>
                <DeleteProductButton @click="openDeleteModal(product)">Delete</DeleteProductButton>
              </CardButtonCallToActionProduct>
            </CardInformationProduct>
          </CardProduct>
          <p v-if="filteredProducts.length === 0">No products found.</p>
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
