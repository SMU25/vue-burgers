<script lang="ts" setup>
import OrderItem from "./OrderItem.vue";
import { IOrder } from "@/types/order";

interface Props {
  items: IOrder[];
}

defineProps<Props>();
</script>

<template>
  <div>
    <OrderItem v-for="item in items" :key="item.id" :order="item" />
  </div>
</template>
