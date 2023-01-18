<script lang="ts" setup>
import router from "@/router";
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import CountLabel from "@/components/Labels/CountLabel.vue";
import CartItems from "@/components/CartItems/index.vue";
import Button from "@/components/Button/index.vue";
import { ButtonVariants } from "@/components/Button/types";

const PARAM_CLASS_NAME =
  "flex justify-between items-baseline py-6 border-gray-lightest border-t-2";
const PARAM_NAME_CLASS_NAME = "text-gray-hard leading-150";

const TOTAL_COUNT_PARAM_NAME = "Total count:";
const TOTAL_PRICE_PARAM_NAME = "Total price:";
const TOTAL_COUNT_PARAM_TEXT = "pcs.";

const CONFIRM_ORDER_BUTTON_NAME = "Confirm order";

const { name } = router.currentRoute.value;

//CHANGE -  кнопка очистити корзину зліва над продуктами + кнопка видалення товару із корзини для кожного або зробити ,як на дизайні , щоб видаляти чекбоксами
</script>

<template>
  <Heading
    class="flex items-start capitalize text-4xl md:text-5xl lg:text-64"
    :headingLevel="HeadingLevels.H2"
  >
    {{ name }}
    <CountLabel class="ml-7 py-1 px-2 text-base">
      {{ 3213213 }}
    </CountLabel>
  </Heading>
  <div class="flex mt-15">
    <CartItems />
    <div class="sticky top-13 max-w-68 w-full h-fit mt-13 ml-15">
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
          <span class="text-2xl font-bold">
            {{ 32131 }}<span class="ml-1">$</span>
          </span>
        </p>
      </div>
      <Button class="w-full text-2xl" :variant="ButtonVariants.PRIMARY">
        {{ CONFIRM_ORDER_BUTTON_NAME }}
      </Button>
    </div>
  </div>
</template>
