<script lang="ts" setup>
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import CountLabel from "@/components/Labels/CountLabel.vue";
import CartItems from "@/components/CartItems/index.vue";
import Button from "@/components/Button/index.vue";
import { ButtonVariants } from "@/components/Button/types";

const PARAM_CLASS_NAME =
  "flex justify-between items-baseline py-6 text-sm lg:text-base border-gray-lightest border-t-2";
const PARAM_NAME_CLASS_NAME = "mr-1 text-gray-hard leading-150";

const TOTAL_COUNT_PARAM_NAME = "Total count:";
const TOTAL_PRICE_PARAM_NAME = "Total price:";
const TOTAL_COUNT_PARAM_TEXT = "pcs.";

const CONFIRM_ORDER_BUTTON_NAME = "Confirm order";

//CHANGE -  кнопка очистити корзину зліва над продуктами + кнопка видалення товару із корзини для кожного або зробити ,як на дизайні , щоб видаляти чекбоксами
</script>

<template>
  <Heading
    class="flex items-start capitalize text-4xl md:text-5xl lg:text-64"
    :headingLevel="HeadingLevels.H2"
  >
    {{ $route.name }}
    <CountLabel
      class="ml-4 md:ml-5 lg:ml-7 py-0.5 md:py-1 px-1 md:px-2 text-xs md:text-sm lg:text-base"
    >
      {{ 3213213 }}
    </CountLabel>
  </Heading>
  <div class="flex flex-col md:flex-row mt-6 md:mt-10 lg:mt-15">
    <CartItems class="w-full lg:w-2/3" />
    <div
      class="sticky top-50 lg:max-w-68 w-full md:w-3/4 lg:w-full h-fit mt-2 md:mt-8 lg:mt-13 ml-0 md:ml-8 lg:ml-15"
    >
      <div>
        <p :class="PARAM_CLASS_NAME">
          <span :class="PARAM_NAME_CLASS_NAME">
            {{ TOTAL_COUNT_PARAM_NAME }}
          </span>
          <span>
            {{ 3 }}<span class="ml-1">{{ TOTAL_COUNT_PARAM_TEXT }}</span>
          </span>
        </p>
        <p :class="PARAM_CLASS_NAME">
          <span :class="PARAM_NAME_CLASS_NAME">
            {{ TOTAL_PRICE_PARAM_NAME }}
          </span>
          <span class="text-base lg:text-2xl font-bold">
            {{ 32131 }}<span class="ml-1">$</span>
          </span>
        </p>
      </div>
      <Button class="w-full lg:text-2xl" :variant="ButtonVariants.PRIMARY">
        {{ CONFIRM_ORDER_BUTTON_NAME }}
      </Button>
    </div>
  </div>
</template>
