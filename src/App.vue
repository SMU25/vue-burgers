<script lang="ts" setup>
import Header from "./components/Header/index.vue";
import ContainerVue from "./components/Layouts/Container.vue";
</script>

<template>
  <Header />
  <ContainerVue>
    <RouterView />
  </ContainerVue>
</template>
