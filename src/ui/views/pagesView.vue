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
  const perPage = 5;
  const isLoading = ref(false);

  const loadProducts = async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      const allProducts = await GetAllProduct();
      const paginatedProducts = allProducts.slice((page.value - 1) * perPage, page.value * perPage);
      products.value = [...products.value, ...paginatedProducts];
      page.value++;
    } catch (error) {
      console.error("Product Error:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const { handleDelete } = useHandleDelete(products);
  const { handleUpdate } = useHandleUpdate(products);

  const updateProduct = async (id: number, updatedData: ModelsSchemaProduct) => {
    await handleUpdate(id, updatedData);
  };

  onMounted(() => {
    loadProducts();
  });

  const handleScroll = () => {
    const bottomOffset = 100;
    const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomOffset;

    if (isNearBottom) {
      loadProducts();
    }
  };

  window.addEventListener("scroll", handleScroll);
</script>

<template>
  <Main>
    <Container>
      <Content>
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
