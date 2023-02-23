<script lang="ts" setup>
import { ref } from "vue";
import Button from "@/components/Button/index.vue";

const PLACEHOLDER_TEXT = "Search products...";

const ICON_SEARCH = {
  SIZE: 50,
  ALT_TEXT: "search",
};

const inputValue = ref("");
</script>

<template>
  <div
    class="flex items-center justify-between w-full border border-green-primary rounded"
  >
    <div class="w-full p-2">
      <input
        class="w-full leading-150 outline-0 placeholder:text-gray-dark"
        :placeholder="PLACEHOLDER_TEXT"
        v-model="inputValue"
      />
    </div>
    <Button
      class="h-full rounded-r hover:bg-gray-lightest active:bg-gray-light active:brightness-120 !translate-y-0"
    >
      <img
        class="p-2"
        src="@/assets/search.svg"
        :width="ICON_SEARCH.SIZE"
        :height="ICON_SEARCH.SIZE"
        :alt="ICON_SEARCH.ALT_TEXT"
      />
    </Button>
  </div>
</template>
