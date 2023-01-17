<script lang="ts" setup>
import { ref } from "vue";
import CategoryItem from "@/components/Categories/CategoryItem.vue";

export interface Category {
  id: number;
  name: string;
}
//CHANGE - винести в загальний тип

interface Props {
  categories: Category[];
}

const props = defineProps<Props>();

const activeCategory = ref(props.categories[0]);

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
