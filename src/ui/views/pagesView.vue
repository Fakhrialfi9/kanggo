<script setup lang="ts">
  import { ref, watch, onMounted } from "vue";
  import { ModelsSchemaProduct } from "../../models/productModels.ts";
  import { GetAllProduct } from "../../APis/getAllProduct.ts";
  import { searchProduct } from "../../APis/searchProduct.ts";
  import { HandleDelete } from "../../handler/deleteHandler.ts";
  import { HandleUpdate } from "../../handler/updateHandler.ts";
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

  const products = ref<ModelsSchemaProduct[]>([]);
  const productToEdit = ref<ModelsSchemaProduct | null>(null);
  const productToDelete = ref<number | null>(null);
  const searchQuery = ref("");
  const modaDeletelMessage = ref("");
  const modaUpdatelMessage = ref("");
  const isLoading = ref(false);
  const isDeleteModalOpen = ref(false);
  const isEditModalOpen = ref(false);
  const page = ref(1);
  const perPage = 10;

  const loadProducts = async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      const allProducts = await GetAllProduct();
      const paginatedProducts = allProducts.slice((page.value - 1) * perPage, page.value * perPage);
      products.value = [...products.value, ...paginatedProducts];
      page.value++;
    } finally {
      isLoading.value = false;
    }
  };

  const searchProducts = async () => {
    if (!searchQuery.value) {
      products.value = [];
      await loadProducts();
    } else {
      try {
        const searchResults = await searchProduct(searchQuery.value);
        products.value = searchResults;
      } catch (error) {
        console.error("Product search error:", error);
      }
    }
  };

  watch(searchQuery, searchProducts);

  const handleScroll = () => {
    const bottomOffset = 100;
    const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomOffset;

    if (isNearBottom) {
      loadProducts();
    }
  };

  const openEditModal = (product: ModelsSchemaProduct) => {
    productToEdit.value = { ...product };
    modaUpdatelMessage.value = `Edit "${product.title}"`;
    isEditModalOpen.value = true;
  };

  const confirmEdit = async (updatedProduct: ModelsSchemaProduct) => {
    try {
      await HandleUpdate(products, updatedProduct.id, updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }
    isEditModalOpen.value = false;
  };

  const cancelEdit = () => {
    isEditModalOpen.value = false;
  };

  const openDeleteModal = (id: number, productName: string) => {
    productToDelete.value = id;
    modaDeletelMessage.value = `Are you sure you want to delete "${productName}"? If you want to delete, click Delete if not, click Cancel.`;
    isDeleteModalOpen.value = true;
  };

  const confirmDelete = async () => {
    if (productToDelete.value !== null) {
      await HandleDelete(products, productToDelete.value);
      productToDelete.value = null;
      isDeleteModalOpen.value = false;
    }
  };

  const cancelDelete = () => {
    productToDelete.value = null;
    isDeleteModalOpen.value = false;
  };

  window.addEventListener("scroll", handleScroll);

  onMounted(() => {
    loadProducts();
  });
</script>

<template>
  <Main>
    <Container>
      <Content>
        <FormSearchProduct>
          <TitleFormSearchProduct>Search Products</TitleFormSearchProduct>
          <SearchBarsProduct v-model="searchQuery" autocomplete="off" type="search" name="search" placeholder="Search Product" />
        </FormSearchProduct>

        <WrapCardProduct>
          <CardProduct v-for="product in products" :key="product.id">
            <CardImageProduct>
              <ImageProduct :src="product.image" alt="Product Image" />
            </CardImageProduct>

            <CardInformationProduct>
              <CardTitleProduct>{{ product.title }}</CardTitleProduct>
              <CardDescriptionProduct>{{ product.description }}</CardDescriptionProduct>
            </CardInformationProduct>

            <CardButtonCallToActionProduct>
              <EditProductButton @click="openEditModal(product)">Edit</EditProductButton>
              <DeleteProductButton @click="openDeleteModal(product.id, product.title)">Delete</DeleteProductButton>
            </CardButtonCallToActionProduct>
          </CardProduct>
        </WrapCardProduct>

        <DeleteModal :isVisible="isDeleteModalOpen" :message="modaDeletelMessage" @confirm="confirmDelete" @cancel="cancelDelete" />
        <EditModal
          :isVisible="isEditModalOpen"
          :message="modaUpdatelMessage"
          :product="productToEdit || undefined"
          @confirm="confirmEdit"
          @cancel="cancelEdit" />
      </Content>
    </Container>
  </Main>
</template>
