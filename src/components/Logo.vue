<script lang="ts" setup>
const ICON_BURGER = {
  SIZE: 50,
  ALT_TEXT: "logo",
};

const HEADING = "Burger Shop";
</script>

<template>
  <div class="flex items-center">
    <img
      src="@/assets/burger-logo.png"
      :width="ICON_BURGER.SIZE"
      :height="ICON_BURGER.SIZE"
      :alt="ICON_BURGER.ALT_TEXT"
    />
    <h1 class="ml-4 capitalize text-3xl font-bold">{{ HEADING }}</h1>
  </div>
</template>
