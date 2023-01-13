<script lang="ts" setup>
import { toRefs, computed } from "vue";
import { BUTTON_VARIANTS_STYLE } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  variant?: ButtonVariants;
}

const props = defineProps<Props>();
const { variant } = toRefs(props);

const activeVariant = computed(() =>
  variant?.value ? variant?.value : ButtonVariants.DEFAULT
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
