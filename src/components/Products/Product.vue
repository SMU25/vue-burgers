<script lang="ts" setup>
import { toRefs } from "vue";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Button from "@/components/Button/index.vue";
import { ButtonVariants } from "@/components/Button/types";
import Counter from "@/components/Counter.vue";
import { IProduct } from "@/types/product";

const ADD_TO_CART_BUTTON_NAME = "Add to cart";

interface Props {
  product: IProduct;
}

const props = defineProps<Props>();
const { title, imgUrl, category, price } = toRefs(props.product);
</script>

<template>
  <div class="flex flex-col max-w-68 bg-white rounded shadow-card-edges group">
    <img class="rounded-t" :src="imgUrl" :alt="title" />
    <div class="flex flex-col justify-between h-full p-2 overflow-hidden">
      <div class="flex justify-between">
        <div class="max-w-6.5/10">
          <Heading :headingLevel="HeadingLevels.H4">
            {{ title }}
          </Heading>
          <p class="capitalize text-gray-light text-sm leading-150">
            {{ category }}
          </p>
        </div>
        <div class="text-lg font-semibold leading-none break-all">
          {{ price }}<span class="ml-1 text-xl">$</span>
        </div>
      </div>
      <p class="h-full mt-2">this is perfect</p>
      <Button
        v-if="true"
        class="justify-self-end w-full mt-2"
        :variant="ButtonVariants.BORDERED_SECONDARY"
        >{{ ADD_TO_CART_BUTTON_NAME }}</Button
      >
      <Counter
        v-else
        class="mt-2"
        :onClickMinus="() => {}"
        :onClickPlus="() => {}"
      >
        {{ 2 }}
      </Counter>
    </div>
  </div>
</template>
