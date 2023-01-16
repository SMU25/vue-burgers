<script lang="ts" setup>
import { toRefs, computed } from "vue";
import Heading from "@/components/Heading/index.vue";
import Product from "./Product.vue";
import { IProduct } from "@/types/product";

interface Props {
  isFilter?: boolean;
  title?: string;
  items: IProduct[];
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
  <div v-if="filteredItems.length" class="pb-5">
    <Heading class="my-10 capitalize text-4xl">
      {{ title }}
      <slot name="heading" />
    </Heading>
    <slot name="info" />
    <div class="grid grid-cols-4 gap-10">
      <Product v-for="item in filteredItems" :key="item.id" :product="item" />
    </div>
  </div>
</template>
