<script setup lang="ts">
  import { Container } from "../../base/style/containerStyle.js";
  import { Navbar, Content } from "../../assets/style/components/navbarStyle.js";
  import LeftSection from "./section/navbarSection/leftSection.vue";
  import CenterSection from "./section/navbarSection/centerSection.vue";
  import RightSection from "./section/navbarSection/rightSection.vue";
</script>

<template>
  <Navbar>
    <Container>
      <Content>
        <LeftSection />
        <CenterSection />
        <RightSection />
      </Content>
    </Container>
  </Navbar>
</template>
