<script setup lang="ts">
  import { RouterView } from "vue-router";
  import { LayoutStyle, HeaderStyle, MainStyle, PagesStyle, FooterStyle } from "../style/layoutStyle.js";
  import NavbarComponents from "../../ui/components/navbarComponents.vue";
  import FooterComponents from "../../ui/components/footerComponents.vue";
</script>

<template>
  <LayoutStyle>
    <HeaderStyle>
      <NavbarComponents />
    </HeaderStyle>

    <MainStyle>
      <PagesStyle>
        <RouterView />
      </PagesStyle>
    </MainStyle>

    <FooterStyle>
      <FooterComponents />
    </FooterStyle>
  </LayoutStyle>
</template>
