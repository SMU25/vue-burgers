<script lang="ts" setup>
import { toRefs } from "vue";

interface Props {
  name: string;
}

const props = defineProps<Props>();
const { name } = toRefs(props);
</script>

<template>
  <div class="flex flex-col items-center">
    <slot class="width-6 height-6" />
    <p class="mt-2 capitalize text-xs leading-150">{{ name }}</p>
  </div>
</template>
