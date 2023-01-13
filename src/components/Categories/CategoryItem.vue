<script lang="ts" setup>
import { toRefs, computed } from "vue";
import Button from "@/components/Button/index.vue";
import { ButtonVariants } from "@/components/Button/types";
import { Category } from "./index.vue";

interface Props {
  categoryId: Category["id"];
  activeCategoryId: Category["id"];
}

const props = defineProps<Props>();
const { activeCategoryId, categoryId } = toRefs(props);

const variant = computed(() =>
  categoryId.value === activeCategoryId.value
    ? ButtonVariants.SECONDARY
    : ButtonVariants.GRAY
);
</script>

<template>
  <li class="ml-6 first:ml-0">
    <Button class="!py-1 capitalize text-xs" :variant="variant">
      <slot />
    </Button>
  </li>
</template>
