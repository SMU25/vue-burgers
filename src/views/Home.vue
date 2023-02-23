<script lang="ts" setup>
import { toRefs, computed, watchEffect } from "vue";
import { useAppStore } from "@/hooks/vuex";
import { ProductsActionsTypes } from "@/store/products/types";
import { FiltersMutationsTypes } from "@/store/filters/types";
import Categories from "@/components/Categories/index.vue";
import Products from "@/components/Products/index.vue";
import { MENU_CATEGORIES } from "@/constants/categories";
import { ICategory } from "@/types/category";

const store = useAppStore();

const { isLoading, items } = toRefs(store.state.products);

const { isShowAllCategories } = toRefs(store.getters);
const activeCategory = computed(() => store.state.filters.category);
const setCategory = (category: ICategory) =>
  store.commit(FiltersMutationsTypes.SET_CATEGORY, category);

//CHANGE - activeCategory збивається коли ми ведемо пошук товару

watchEffect(() =>
  store.dispatch(
    ProductsActionsTypes.GET_PRODUCTS_ASYNC,
    activeCategory.value.name
  )
);
</script>

<template>
  <Categories
    :activeCategory="activeCategory"
    :setCategory="setCategory"
    :categories="MENU_CATEGORIES"
  />
  <template v-if="isShowAllCategories">
    <Products
      v-for="{ id, name } in MENU_CATEGORIES"
      :key="id"
      :title="name"
      :isLoading="isLoading"
      :items="items"
      isFilter
    />
  </template>
  <Products
    v-else
    :title="activeCategory.name"
    :isLoading="isLoading"
    :items="items"
  />
</template>
