<script lang="ts" setup>
import Header from "./components/Header/index.vue";
import Container from "./components/Layouts/Container.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <Header />
  <Container class="pb-40">
    <Navigation class="my-6" />
    <RouterView />
  </Container>
</template>
