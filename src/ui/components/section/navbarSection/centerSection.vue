<script setup lang="ts">
  import { centernavbarData } from "../../../../data/components/navbarData.js";
  import { CenterContent, CenterContentMenu, CenterContentItem, CenterContentLinkItem } from "../../../../assets/style/components/navbarStyle.js";
</script>

<template>
  <CenterContent>
    <CenterContentMenu>
      <CenterContentItem v-for="item in centernavbarData" :key="item.index">
        <CenterContentLinkItem :to="item.to" active-class="active" exact-active-class="exact-active">
          {{ item.nama }}
        </CenterContentLinkItem>
      </CenterContentItem>
    </CenterContentMenu>
  </CenterContent>
</template>
