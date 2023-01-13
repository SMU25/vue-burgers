<script lang="ts" setup>
import Heading from "@/components/Heading/index.vue";
import { toRefs } from "vue";
import Product, { IProduct } from "./Product.vue";

interface Props {
  id: string;
  category: string;
  items: IProduct[];
}
//CHANGE - винести в загальний тип і передивитися усі мої типи,спробувати їх винести

const props = defineProps<Props>();
const { category, items } = toRefs(props);
</script>

<template>
  <div class="pb-5">
    <Heading class="my-10 capitalize">{{ category }}</Heading>
    <div class="grid grid-cols-4 gap-10">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </div>
</template>
