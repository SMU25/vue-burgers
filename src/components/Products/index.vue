<script lang="ts" setup>
import { toRefs, computed } from "vue";
import Heading from "@/components/Heading/index.vue";
import { IProduct } from "@/types/product";
import { IOrderProduct } from "@/types/order";
import Product from "./Product.vue";

interface Props {
  isFilter?: boolean;
  title?: string;
  items: IProduct[] | IOrderProduct[];
}
//CHANGE - винести в загальний тип і передивитися усі мої типи,спробувати їх винести
// додати типи в рефи , там де значення має більше 1 типу

const props = defineProps<Props>();
const { isFilter, title, items } = toRefs(props);

const filteredItems = computed(() =>
  isFilter?.value
    ? items.value.filter((item) => item.category === title?.value)
    : items.value
);
</script>

<template>
  <div v-if="filteredItems.length" class="mt-2 md:mt-6 lg:mt-10 pb-5">
    <Heading class="capitalize text-2xl md:text-3xl lg:text-4xl">
      {{ title }}
      <slot name="heading" />
    </Heading>
    <slot name="info" />
    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-10 mt-2 lg:mt-10"
    >
      <Product v-for="item in filteredItems" :key="item.id" :product="item" />
    </div>
  </div>
</template>
