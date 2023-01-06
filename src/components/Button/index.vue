<script lang="ts" setup>
import { ref, toRefs, watchEffect } from "vue";
import { BUTTON_VARIANTS_STYLE } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  variant?: ButtonVariants;
}

const props = defineProps<Props>();
const { variant } = toRefs(props);

const activeVariant = ref(ButtonVariants.DEFAULT);

watchEffect(() =>
  variant?.value
    ? (activeVariant.value = variant?.value)
    : (activeVariant.value = ButtonVariants.DEFAULT)
);
</script>

<template>
  <button
    :class="[
      'py-1 px-2 text-white text-xs leading-150 rounded hover:shadow-light-outer active:shadow-top-inner',
      BUTTON_VARIANTS_STYLE[activeVariant],
    ]"
  >
    <slot />
  </button>
</template>
