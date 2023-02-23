<script lang="ts" setup>
import { computed } from "vue";
import { BUTTON_VARIANTS_STYLE } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  variant?: ButtonVariants;
}

const props = defineProps<Props>();

const activeVariant = computed(() =>
  props.variant ? props.variant : ButtonVariants.DEFAULT
);
</script>

<template>
  <button
    :class="[
      'py-2 px-2 text-white leading-150 rounded transition duration-100 active:translate-y-0.5 active:shadow-top-inner',
      BUTTON_VARIANTS_STYLE[activeVariant],
    ]"
  >
    <slot />
  </button>
</template>
