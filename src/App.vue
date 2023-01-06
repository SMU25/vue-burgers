<script lang="ts" setup>
import Header from "./components/Header/index.vue";
import Container from "./components/Layouts/Container.vue";
</script>

<template>
  <Header />
  <Container>
    <RouterView />
  </Container>
</template>
