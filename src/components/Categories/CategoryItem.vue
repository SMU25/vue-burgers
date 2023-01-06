<script lang="ts" setup>
import { ref, toRefs, watch, watchEffect } from "vue";
import Button from "@/components/Button/index.vue";
import { ButtonVariants } from "@/components/Button/types";

interface Category {
  id: number;
  name: string;
}

interface Props {
  category: Category;
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const props = defineProps<Props>();
const { category, activeCategory } = toRefs(props);

const variant = ref(ButtonVariants.GRAY);

watchEffect(() =>
  category.value.id === activeCategory.value.id
    ? (variant.value = ButtonVariants.SECONDARY)
    : (variant.value = ButtonVariants.GRAY)
);
</script>

<template>
  <li class="ml-6 first:ml-0">
    <Button
      class="capitalize"
      :variant="variant"
      @click="setActiveCategory(category)"
      >{{ category.name }}</Button
    >
  </li>
</template>
