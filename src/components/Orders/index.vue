<script lang="ts" setup>
import OrderItem from "./OrderItem.vue";
import Preloader from "./Preloader.vue";
import { IOrder } from "@/types/order";

interface Props {
  isLoading: boolean;
  items: IOrder[];
}

defineProps<Props>();
</script>

<template>
  <div>
    <template v-if="isLoading">
      <Preloader />
    </template>
    <template v-else>
      <OrderItem v-for="item in items" :key="item.id" :order="item" />
    </template>
  </div>
</template>
