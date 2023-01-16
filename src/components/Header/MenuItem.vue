<script lang="ts" setup>
import { toRefs } from "vue";

interface Props {
  name: string;
}

const props = defineProps<Props>();
const { name } = toRefs(props);
</script>

<template>
  <div
    class="flex flex-col items-center hover:text-orange-primary hover:fill-path--orange-primary"
  >
    <slot />
    <p class="mt-2 capitalize text-xs leading-150">
      {{ name }}
    </p>
  </div>
</template>
