<script setup lang="ts">
  import LogoKanggo from "../../../../../public/media/logo/mainlogo.png";
  import { LeftContent, BoxLogoImage, LogoImage } from "../../../../assets/style/components/navbarStyle.js";
</script>

<template>
  <LeftContent>
    <BoxLogoImage>
      <LogoImage :src="LogoKanggo" alt="" />
    </BoxLogoImage>
  </LeftContent>
</template>
