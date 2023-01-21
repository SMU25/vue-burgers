<script lang="ts" setup>
import CategoryItem from "@/components/Categories/CategoryItem.vue";
import { ICategory } from "@/types/category";

interface Props {
  activeCategory: ICategory;
  setCategory: (category: ICategory) => void;
  categories: ICategory[];
}

defineProps<Props>();
</script>
<template>
  <ul
    class="flex mt-10 overflow-x-auto h-10 scrollbar-thin scrollbar-thumb-gray-light hover:scrollbar-thumb-gray-hard active:scrollbar-thumb-gray-hardtest scrollbar-track-inherit scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
  >
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :categoryId="category.id"
      :activeCategoryId="activeCategory.id"
      @click="setCategory(category)"
    >
      {{ category.name }}
    </CategoryItem>
  </ul>
</template>
