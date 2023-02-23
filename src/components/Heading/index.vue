<script lang="ts" setup>
import { ref, toRefs, h } from "vue";
import { HeadingLevels } from "./types";

interface Props {
  headingLevel?: HeadingLevels;
}

const props = defineProps<Props>();

const { type: Heading } = h(props.headingLevel || HeadingLevels.H3);
</script>

<template>
  <Heading class="font-bold leading-150">
    <slot />
  </Heading>
</template>
