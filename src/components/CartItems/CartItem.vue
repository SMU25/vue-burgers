<script lang="ts" setup>
import { toRefs } from "vue";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Counter from "@/components/Counter.vue";
import { ICartItem } from "@/types/cartItem";

const PRICE_INFO_FOR_ONE_PCS = "for 1 pcs.";

interface Props {
  cartItem: ICartItem;
}

const props = defineProps<Props>();
const { imgUrl, title, category, price } = toRefs(props.cartItem.product);
const { totalPrice, totalCount } = toRefs(props.cartItem);
</script>

<template>
  <div class="flex justify-between bg-white mb-6 rounded shadow-card-edges">
    <div class="flex w-full">
      <div
        class="flex justify-center items-center max-w-25 max-h-22 mb-3 rounded overflow-hidden shadow-card-edges"
      >
        <img :src="imgUrl" :alt="title" />
      </div>
      <div class="w-full my-3 ml-2">
        <Heading class="!font-medium" :headingLevel="HeadingLevels.H4">
          {{ title }}
        </Heading>
        <p class="mt-1 capitalize text-gray-light text-sm">
          {{ category }}
        </p>
        <div class="mt-2 text-xs font-bold">
          {{ price }}<span class="ml-1">$</span
          ><span class="ml-2 text-gray-hardtest font-medium">
            {{ PRICE_INFO_FOR_ONE_PCS }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col xl:flex-row items-end xl:items-stretch mb-3 xl:mb-0 ml-2 xl:ml-4 p-1 xl:p-0"
    >
      <Counter
        class="w-32 xl:self-center"
        :onClickMinus="() => {}"
        :onClickPlus="() => {}"
      >
        {{ totalCount }}
        <!--CHANGE - totalCount > 99999 ? 99999 : totalCount ||||| max count 99999 -->
      </Counter>
      <div
        class="w-32 xl:w-40 mt-1 xl:mt-0 xl:ml-4 xl:p-2 text-end text-lg font-bold break-all"
      >
        {{ totalPrice }}<span class="ml-1">$</span>
      </div>
    </div>
  </div>
</template>
