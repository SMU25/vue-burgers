<script lang="ts" setup>
import router from "@/router";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Orders from "@/components/Orders/index.vue";

const { name } = router.currentRoute.value;
</script>

<template>
  <Heading
    class="flex items-start capitalize text-64"
    :headingLevel="HeadingLevels.H2"
  >
    {{ name }}
  </Heading>
  <Orders />
</template>
