<script lang="ts" setup>
import { ref } from "vue";
import CategoryItem from "@/components/Categories/CategoryItem.vue";
import { ICategory } from "@/types/category";

interface Props {
  categories: ICategory[];
}

const props = defineProps<Props>();

const activeCategory = ref(props.categories[0]);

const setActiveCategory = (category: ICategory) =>
  (activeCategory.value = category);
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
      @click="setActiveCategory(category)"
    >
      {{ category.name }}
    </CategoryItem>
  </ul>
</template>
