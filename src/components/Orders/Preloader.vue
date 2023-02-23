<script lang="ts" setup>
import Shimmer from "@/components/Shimmer/index.vue";
import PreloaderProducts from "@/components/Products/Preloader.vue";
import { getArrayNumbers } from "@/utils/getArrayNumbers";

const ARRAY_NUMBERS = getArrayNumbers();
</script>

<template>
  <div class="mb-10 md:mb-16 lg:mb-24">
    <Shimmer class="w-52 h-8" />
    <div
      class="flex justify-between items-center mt-2 pt-1 border-gray-hardtest border-t-2"
    >
      <Shimmer class="w-48 h-5" />
      <Shimmer class="w-20 h-6" />
    </div>
    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-10 mt-2 lg:mt-10"
    >
      <PreloaderProducts v-for="item in ARRAY_NUMBERS" :key="item" isHideDesc />
    </div>
  </div>
</template>
