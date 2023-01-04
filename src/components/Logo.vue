<script lang="ts" setup>
const LOGO_IMG = {
  SIZE: 50,
  ALT_TEXT: "logo",
};

const HEADING = "Burger Shop";
</script>

<template>
  <div class="flex items-center">
    <img
      src="@/assets/burger-logo.png"
      :width="LOGO_IMG.SIZE"
      :height="LOGO_IMG.SIZE"
      :alt="LOGO_IMG.ALT_TEXT"
    />
    <h1 class="ml-4 capitalize text-3xl font-bold">{{ HEADING }}</h1>
  </div>
</template>
