<script lang="ts" setup>
import { ref } from "vue";
import Button from "@/components/Button/index.vue";

const PLACEHOLDER_TEXT = "Search products...";

const SEARCH_IMG = {
  SIZE: 50,
  ALT_TEXT: "search",
};

const inputValue = ref("");
</script>

<template>
  <div
    class="flex items-center justify-between max-w-112.5 w-full border border-green-primary rounded"
  >
    <div class="w-full p-2">
      <input
        class="w-full leading-150 outline-0 placeholder:text-gray-dark"
        :placeholder="PLACEHOLDER_TEXT"
        v-model="inputValue"
      />
    </div>
    <Button
      class="rounded-r hover:bg-gray-lightest active:bg-gray-light active:brightness-120 !translate-y-0"
    >
      <img
        class="px-2"
        src="@/assets/search.svg"
        :width="SEARCH_IMG.SIZE"
        :height="SEARCH_IMG.SIZE"
        :alt="SEARCH_IMG.ALT_TEXT"
      />
    </Button>
  </div>
</template>
