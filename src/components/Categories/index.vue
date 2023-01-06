<script lang="ts" setup>
import { ref, toRefs } from "vue";
import CategoryItem from "@/components/Categories/CategoryItem.vue";
import { MENU_CATEGORIES } from "@/constants/categories";

// interface Props {
// }

// const props = defineProps<Props>();
// const {  } = toRefs(props);

const activeCategory = ref(MENU_CATEGORIES[0]);
const setActiveCategory = (category: { id: number; name: string }) =>
  (activeCategory.value = category);
</script>

<template>
  <ul class="flex mt-20">
    <CategoryItem
      v-for="category in MENU_CATEGORIES"
      :key="category.id"
      :category="category"
      :activeCategory="activeCategory"
      :setActiveCategory="setActiveCategory"
    />
  </ul>
</template>
