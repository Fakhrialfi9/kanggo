<script setup lang="ts">
  import { LogIn, Plus } from "lucide-vue-next";
  import { RightContent, LoginButton, AddProductButton } from "../../../../assets/style/components/navbarStyle.js";
</script>

<template>
  <RightContent>
    <AddProductButton>Add Product <Plus :size="15" /> </AddProductButton>
    <LoginButton>Login <LogIn :size="15" /> </LoginButton>
  </RightContent>
</template>
