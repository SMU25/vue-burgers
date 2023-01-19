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
  <div
    class="flex flex-col gl:flex-row items-center gl:items-stretch justify-center gl:justify-between bg-white mb-6 rounded shadow-card-edges"
  >
    <div class="flex w-full">
      <div
        class="flex justify-center items-center max-w-25 max-h-19 mmax-h-25 lg:max-h-22 lg:mb-3 rounded overflow-hidden shadow-card-edges"
      >
        <img :src="imgUrl" :alt="title" />
      </div>
      <div class="w-full lg:my-3 lg:ml-2 p-2 lg:p-0">
        <Heading
          class="text-xs gl:text-base !font-medium"
          :headingLevel="HeadingLevels.H4"
        >
          {{ title }}
        </Heading>
        <p class="mt-1 capitalize text-gray-light text-10 gl:text-sm">
          {{ category }}
        </p>
        <div class="flex gl:block items-center mt-2 text-xs font-bold">
          {{ price }}<span class="text-xs ml-1">$</span>
          <span
            class="-mt-1 gl:mt-0 ml-2 text-gray-hardtest text-8 gl:text-xs font-medium"
          >
            {{ PRICE_INFO_FOR_ONE_PCS }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row gl:flex-col xl:flex-row items-center gl:items-end xl:items-stretch justify-between gl:justify-start w-full gl:w-auto gl:mb-3 xl:mb-0 gl:ml-2 xl:ml-4 p-2 gl:p-1 xl:p-0"
    >
      <Counter
        class="w-30 lg:w-32 xl:self-center text-sm lg:text-base"
        :onClickMinus="() => {}"
        :onClickPlus="() => {}"
      >
        {{ totalCount }}
        <!--CHANGE - totalCount > 99999 ? 99999 : totalCount ||||| max count 99999 -->
      </Counter>
      <div
        class="lg:w-32 xl:w-40 gl:mt-1 xl:mt-0 ml-4 lg:ml-6 gl:ml-0 xl:ml-4 xl:p-2 text-end text-sm gl:text-base xl:text-lg font-bold break-all"
      >
        {{ totalPrice }}<span class="ml-2 gl:ml-1">$</span>
      </div>
    </div>
  </div>
</template>
