<script lang="ts" setup>
import { ref, toRefs, h } from "vue";
import { HeadingLevels } from "./types";

interface Props {
  headingLevel?: HeadingLevels;
}

const props = defineProps<Props>();
const { headingLevel } = toRefs(props);

const { type: Heading } = h(headingLevel?.value || HeadingLevels.H3);
</script>

<template>
  <Heading class="text-4xl font-bold leading-150">
    <slot />
  </Heading>
</template>
