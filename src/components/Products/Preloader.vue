<script lang="ts" setup>
import Shimmer from "@/components/Shimmer/index.vue";
</script>

<template>
  <div
    class="flex flex-col justify-between h-101.5 bg-white rounded shadow-card-edges"
  >
    <div class="h-full">
      <Shimmer
        class="max-h-30 xs:max-h-35.5 sm:max-h-39 h-full mx-auto rounded-t"
      />
      <div class="p-2">
        <div class="flex justify-between">
          <div>
            <Shimmer class="w-30 h-4" />
            <Shimmer class="w-20 h-3.5 mt-1" />
          </div>
          <Shimmer class="w-10 h-5" />
        </div>
        <div>
          <Shimmer class="w-11/12 h-3 mt-2" />
          <Shimmer class="h-3 mt-0.5" />
          <Shimmer class="w-10/12 h-3 mt-0.5" />
          <Shimmer class="w-3/4 h-3 mt-0.5" />
        </div>
      </div>
    </div>
    <Shimmer class="h-10 m-2" />
  </div>
</template>
