<script lang="ts" setup>
import { ref, toRefs } from "vue";
import CategoryItem from "@/components/Categories/CategoryItem.vue";

export interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
}

const props = defineProps<Props>();
const { categories } = toRefs(props);

const activeCategory = ref(categories.value[0]);

const setActiveCategory = (category: Category) =>
  (activeCategory.value = category);
</script>

<template>
  <ul class="flex mt-10">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :categoryId="category.id"
      :activeCategoryId="activeCategory.id"
      @click="setActiveCategory(category)"
    >
      {{ category.name }}
    </CategoryItem>
  </ul>
</template>
