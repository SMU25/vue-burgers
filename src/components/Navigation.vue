<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { PATHNAMES } from "@/constants/routes";

const CHEVRON_ICON_ALT_TEXT = "chevron";

const NAVIGATION_ITEM_CLASS_NAME = "capitalize leading-150";

const DEFAULT_PAGE_NAME = "no name";
const MAIN_PAGE_NAME = "home";

const route = useRoute();

const isHomepage = computed(() => route.path === PATHNAMES.HOME);
</script>

<template>
  <ul class="flex">
    <li :class="['flex', NAVIGATION_ITEM_CLASS_NAME, { hidden: isHomepage }]">
      <RouterLink :to="PATHNAMES.HOME">
        {{ MAIN_PAGE_NAME }}
      </RouterLink>
      <img
        class="mx-6"
        src="@/assets/chevron-right.svg"
        :alt="CHEVRON_ICON_ALT_TEXT"
      />
    </li>
    <li :class="['flex text-gray-hard', NAVIGATION_ITEM_CLASS_NAME]">
      {{ route.name || DEFAULT_PAGE_NAME }}
    </li>
  </ul>
</template>
