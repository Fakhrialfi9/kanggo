<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { GetAllProduct } from "../../APis/getAllProduct.ts";
  import { ModelsSchemaProduct } from "../../models/productModels.ts";
  import { useHandleDelete } from "../../handler/deleteHandler.ts";
  import { useHandleUpdate } from "../../handler/updateHandler.ts";
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

  const products = ref<ModelsSchemaProduct[]>([]);
  const page = ref(1);
  const perPage = 10;
  const isLoading = ref(false);

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

  const handleScroll = () => {
    const bottomOffset = 100;
    const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomOffset;

    if (isNearBottom) {
      loadProducts();
    }
  };

  const updateProduct = async (id: number, updatedData: ModelsSchemaProduct) => {
    await handleUpdate(id, updatedData);
  };

  const { handleDelete } = useHandleDelete(products);
  const { handleUpdate } = useHandleUpdate(products);

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
          <SearchBarsProduct autocomplete="off" type="search" name="search" placeholder="Search Product" />
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
              <EditProductButton @click="updateProduct(product.id, { ...product, title: 'New Title' })">Edit</EditProductButton>
              <DeleteProductButton @click="handleDelete(product.id)">Delete</DeleteProductButton>
            </CardButtonCallToActionProduct>
          </CardProduct>
        </WrapCardProduct>
      </Content>
    </Container>
  </Main>
</template>
