<script lang="ts" setup>
import Heading from "@/components/Heading/index.vue";
import { HeadingLevels } from "@/components/Heading/types";
import Button from "@/components/Button/index.vue";
import { ButtonVariants } from "@/components/Button/types";
import Counter from "@/components/Counter.vue";

export interface IProduct {
  id: string;
  title: string;
  imgUrl: string;
  category: string;
  price: number;
}

const ADD_TO_CART_BUTTON_NAME = "Add to cart";
</script>

<template>
  <div class="max-w-68 bg-white rounded shadow-card-edges">
    <img
      class="rounded-t"
      src="https://thumb.tildacdn.com/tild6561-6132-4932-b436-356262363431/-/format/webp/__.jpg"
      alt="name"
    />
    <div class="p-2">
      <div class="flex justify-between items-center">
        <div>
          <Heading
            class="capitalize text-base"
            :headingLevel="HeadingLevels.H4"
            >{{ "King burger" }}</Heading
          >
          <p class="capitalize text-gray-light text-xs leading-150">
            {{ "burgers" }}
          </p>
        </div>
        <div class="text-lg font-bold leading-150">{{ 123 }} $</div>
      </div>
      <!-- <p class="mt-2">this is perfect</p> -->
      <Button
        v-if="true"
        class="mt-2 w-full"
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
