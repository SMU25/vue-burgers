<script lang="ts" setup>
import CartItem from "./CartItem.vue";

const MOCK_CART_ITEMS: any = {
  "2": {
    product: {
      id: "2",
      title: "Burger from Ukraine",
      imgUrl:
        "https://thumb.tildacdn.com/tild6561-6132-4932-b436-356262363431/-/resize/720x/-/format/webp/__.jpg",
      category: "burgers",
      price: 2.1,
    },
    totalCount: 22321,
    totalPrice: 123213221312,
  },
  "10": {
    product: {
      id: "10",
      title: "Chicken Nuggets",
      imgUrl:
        "https://thumb.tildacdn.com/tild3965-3966-4562-a632-386133633064/-/format/webp/__6912.jpg",
      category: "nuggets",
      price: 3.1,
    },
    totalCount: 3,
    totalPrice: 200,
  },
  "18": {
    product: {
      id: "18",
      title: "Water 0.5 l.",
      imgUrl:
        "https://thumb.tildacdn.com/tild3937-3138-4364-b633-313964643861/-/resize/720x/-/format/webp/10.jpg",
      category: "drinks",
      price: 100,
    },
    totalCount: 3,
    totalPrice: 300,
  },
  "19": {
    product: {
      id: "18",
      title: "Water 0.5 l.",
      imgUrl:
        "https://thumb.tildacdn.com/tild3830-3733-4061-a539-666339396232/-/resize/534x/-/format/webp/photo.JPG",
      category: "drinks",
      price: 100,
    },
    totalCount: 3,
    totalPrice: 300,
  },
  "12": {
    product: {
      id: "18",
      title: "Water 0.5 l.",
      imgUrl:
        "https://thumb.tildacdn.com/tild3737-6464-4266-a434-366662633061/-/resize/246x/-/format/webp/photo.png",
      category: "drinks",
      price: 100,
    },
    totalCount: 3,
    totalPrice: 300,
  },
  "181": {
    product: {
      id: "18",
      title: "Water 0.5 l.",
      imgUrl:
        "https://thumb.tildacdn.com/tild3937-3138-4364-b633-313964643861/-/resize/720x/-/format/webp/10.jpg",
      category: "drinks",
      price: 100,
    },
    totalCount: 3,
    totalPrice: 300,
  },
  "182": {
    product: {
      id: "18",
      title: "Water 0.5 l.",
      imgUrl:
        "https://thumb.tildacdn.com/tild3937-3138-4364-b633-313964643861/-/resize/720x/-/format/webp/10.jpg",
      category: "drinks",
      price: 100,
    },
    totalCount: 3,
    totalPrice: 300,
  },
};
</script>

<template>
  <div class="w-2/3">
    <CartItem
      v-for="key in Object.keys(MOCK_CART_ITEMS)"
      :key="key"
      :cartItem="MOCK_CART_ITEMS[key]"
    />
  </div>
</template>
