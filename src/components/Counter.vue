<script lang="ts" setup>
import { toRefs } from "vue";
import Button from "@/components/Button/index.vue";
import { VoidFunction } from "@/types";
import IconMinus from "./Icons/IconMinus.vue";
import IconPlus from "./Icons/IconPlus.vue";

const BUTTON_CLASS_NAME =
  "!rounded-full hover:bg-white hover:fill-path--green-primary";

interface Props {
  onClickMinus: VoidFunction;
  onClickPlus: VoidFunction;
}

const props = defineProps<Props>();
const { onClickMinus, onClickPlus } = toRefs(props);
</script>

<template>
  <div
    class="flex justify-between items-center bg-green-primary p-2 text-white leading-150 rounded"
  >
    <Button :class="BUTTON_CLASS_NAME" @click="onClickMinus">
      <IconMinus />
    </Button>
    <span class="mx-2">
      <slot />
    </span>
    <Button :class="BUTTON_CLASS_NAME" @click="onClickPlus">
      <IconPlus />
    </Button>
  </div>
</template>
