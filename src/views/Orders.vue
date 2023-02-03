<script lang="ts" setup>
import { toRefs } from "vue";
import { useAppStore } from "@/hooks/vuex";
import { OrdersActionsTypes } from "@/store/orders/types";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Orders from "@/components/Orders/index.vue";

const store = useAppStore();

const { isLoading, items } = toRefs(store.state.orders);

store.dispatch(OrdersActionsTypes.GET_ORDERS_ASYNC);
</script>

<template>
  <Heading
    class="flex items-start capitalize text-4xl md:text-5xl lg:text-64"
    :headingLevel="HeadingLevels.H2"
  >
    {{ $route.name }}
  </Heading>
  <Orders :items="items" />
</template>
