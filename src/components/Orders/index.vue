<script lang="ts" setup>
import OrderItem from "./OrderItem.vue";

const MOCK_ITEMS = [
  {
    id: "1",
    createdAt: new Date(),
    totalPrice: 445,
    items: [
      {
        id: "1",
        title: "BiBurger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3666-3061-4134-b561-383761656630/-/resize/720x/-/format/webp/_.jpg",
        category: "burgers",
        price: 2,
      },
      {
        id: "2",
        title: "Burger from Ukraine",
        imgUrl:
          "https://thumb.tildacdn.com/tild6561-6132-4932-b436-356262363431/-/resize/720x/-/format/webp/__.jpg",
        category: "burgers",
        price: 2.1,
      },
      {
        id: "3",
        title: "BarbeQ Burger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3737-3366-4537-b961-393062393237/-/resize/720x/-/format/webp/_.jpg",
        category: "burgers",
        price: 3,
      },
      {
        id: "4",
        title: "Gamburger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3032-3763-4537-b364-366639313061/-/resize/720x/-/format/webp/photo.jpg",
        category: "burgers",
        price: 2,
      },
    ],
  },
  {
    id: "2",
    createdAt: new Date(),
    totalPrice: 123132,
    items: [
      {
        id: "1",
        title: "BiBurger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3666-3061-4134-b561-383761656630/-/resize/720x/-/format/webp/_.jpg",
        category: "burgers",
        price: 2,
      },
      {
        id: "2",
        title: "Burger from Ukraine",
        imgUrl:
          "https://thumb.tildacdn.com/tild6561-6132-4932-b436-356262363431/-/resize/720x/-/format/webp/__.jpg",
        category: "burgers",
        price: 2.1,
      },
      {
        id: "3",
        title: "BarbeQ Burger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3737-3366-4537-b961-393062393237/-/resize/720x/-/format/webp/_.jpg",
        category: "burgers",
        price: 3,
      },
      {
        id: "4",
        title: "Gamburger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3032-3763-4537-b364-366639313061/-/resize/720x/-/format/webp/photo.jpg",
        category: "burgers",
        price: 2,
      },
    ],
  },
  {
    id: "3",
    createdAt: new Date(),
    totalPrice: 555,
    items: [
      {
        id: "1",
        title: "BiBurger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3666-3061-4134-b561-383761656630/-/resize/720x/-/format/webp/_.jpg",
        category: "burgers",
        price: 2,
      },
      {
        id: "2",
        title: "Burger from Ukraine",
        imgUrl:
          "https://thumb.tildacdn.com/tild6561-6132-4932-b436-356262363431/-/resize/720x/-/format/webp/__.jpg",
        category: "burgers",
        price: 2.1,
      },
      {
        id: "3",
        title: "BarbeQ Burger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3737-3366-4537-b961-393062393237/-/resize/720x/-/format/webp/_.jpg",
        category: "burgers",
        price: 3,
      },
      {
        id: "4",
        title: "Gamburger",
        imgUrl:
          "https://thumb.tildacdn.com/tild3032-3763-4537-b364-366639313061/-/resize/720x/-/format/webp/photo.jpg",
        category: "burgers",
        price: 2,
      },
    ],
  },
];
</script>

<template>
  <div>
    <OrderItem v-for="item in MOCK_ITEMS" :key="item.id" :order="item" />
  </div>
</template>
