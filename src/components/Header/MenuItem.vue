<script lang="ts" setup>
interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col items-center hover:text-orange-primary hover:fill-path--orange-primary"
  >
    <slot />
    <p class="mt-2 capitalize text-xs leading-150">
      {{ props.name }}
    </p>
  </div>
</template>
