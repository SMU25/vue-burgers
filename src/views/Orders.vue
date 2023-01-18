<script lang="ts" setup>
import router from "@/router";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Orders from "@/components/Orders/index.vue";

const { name } = router.currentRoute.value;

//CHANGE -  Додати кількість елементів кожного продукту ,які було замовлено,
</script>

<template>
  <Heading
    class="flex items-start capitalize text-4xl md:text-5xl lg:text-64"
    :headingLevel="HeadingLevels.H2"
  >
    {{ name }}
  </Heading>
  <Orders />
</template>
