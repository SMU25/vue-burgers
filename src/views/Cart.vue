<script lang="ts" setup>
import router from "@/router";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";

const { name } = router.currentRoute.value;
</script>

<template>
  <Heading class="capitalize" :headingLevel="HeadingLevels.H2">
    {{ name }}
  </Heading>
</template>
