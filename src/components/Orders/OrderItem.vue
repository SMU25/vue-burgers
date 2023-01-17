<script lang="ts" setup>
import { toRefs } from "vue";
import format from "date-fns/format";
import Products from "@/components/Products/index.vue";
import { IOrder } from "@/types/order";

const DATE_FORMAT = "d/MMM/yyyy | HH:mm";

const HEADING = "Order:";

interface Props {
  order: IOrder;
}

const props = defineProps<Props>();
const { id, createdAt, totalPrice, items } = toRefs(props.order);
//CHANGE - Поудаляти лишні елементи із дестрктурізації ,які я не юзаю  в скріпті ,
// бо якщо я юзаю в template, то витягати їх не потрібно

const date = format(createdAt.value, DATE_FORMAT);
</script>

<template>
  <div class="mb-24">
    <Products :items="items">
      <template #heading>
        {{ HEADING }}<span class="ml-3">#{{ id }}</span>
      </template>
      <template #info>
        <div class="flex justify-between items-center mt-2 leading-150">
          <time class="text-gray-hard font-bold" :datetime="date">
            {{ date }}
          </time>
          <span class="font-bold text-2xl">
            {{ totalPrice }}<span class="ml-1">$</span>
          </span>
        </div>
      </template>
    </Products>
  </div>
</template>
