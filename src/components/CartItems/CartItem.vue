<script lang="ts" setup>
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Counter from "@/components/Counter.vue";
import { toRefs } from "vue";
import { IProduct } from "@/types/product";

const PRICE_INFO_FOR_ONE_PCS = "for 1 pcs.";

interface Props {
  product: IProduct;
  totalPrice: number;
  totalCount: number;
}

const props = defineProps<Props>();
const { product, totalPrice, totalCount } = toRefs(props);
</script>

<template>
  <div class="flex justify-between max-h-25 mb-6 shadow-card-edges">
    <div class="flex w-full">
      <img
        class="max-w-30 w-full mb-3 shadow-card-edges"
        :src="product.imgUrl"
        :alt="product.title"
      />
      <div class="my-3 ml-2">
        <Heading class="!font-normal" :headingLevel="HeadingLevels.H4">
          {{ product.title }}
        </Heading>
        <p class="mt-1 capitalize text-sm font-bold">{{ product.category }}</p>
        <div class="mt-2 text-xs font-bold">
          {{ product.price }}<span class="ml-1">$</span
          ><span class="ml-2 text-gray-hardtest font-medium">
            {{ PRICE_INFO_FOR_ONE_PCS }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex ml-4">
      <Counter
        class="w-32 self-center"
        :onClickMinus="() => {}"
        :onClickPlus="() => {}"
      >
        {{ totalCount }}
        <!-- totalCount > 99999 ? 99999 : totalCount ||||| max count 99999 -->
      </Counter>
      <div class="w-40 ml-4 p-2 text-end text-lg font-bold">
        {{ totalPrice }}<span class="ml-1">$</span>
      </div>
    </div>
  </div>
</template>
