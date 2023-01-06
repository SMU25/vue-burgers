<script lang="ts" setup>
import { ref } from "vue";
const PLACEHOLDER_TEXT = "Search products...";

const SEARCH_IMG = {
  SIZE: 40,
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
    <img
      class="h-full px-2 hover:bg-gray-lightest cursor-pointer rounded-r"
      src="@/assets/search.svg"
      :width="SEARCH_IMG.SIZE"
      :height="SEARCH_IMG.SIZE"
      :alt="SEARCH_IMG.ALT_TEXT"
    />
  </div>
</template>
