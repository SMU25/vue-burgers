<script lang="ts" setup>
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Orders from "@/components/Orders/index.vue";
</script>

<template>
  <Heading
    class="flex items-start capitalize text-4xl md:text-5xl lg:text-64"
    :headingLevel="HeadingLevels.H2"
  >
    {{ $route.name }}
  </Heading>
  <Orders />
</template>
