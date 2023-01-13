<script lang="ts" setup>
import Categories from "@/components/Categories/index.vue";
import Products from "@/components/Products/index.vue";
import { MENU_CATEGORIES } from "@/constants/categories";

const MOCK_ITEMS = [
  {
    category: "burgers",
    items: [
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "drinks",
        price: 100,
      },
    ],
    id: "1",
  },
  {
    category: "potato",
    items: [
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
    ],
    id: "2",
  },
  {
    category: "drinks",
    items: [
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
    ],
    id: "3",
  },
  {
    category: "souces",
    items: [
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
    ],
    id: "4",
  },
  {
    category: "nuggets",
    items: [
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
      {
        id: "1",
        title: "Барбекю Бургер",
        imgUrl:
          "https://static.tildacdn.com/tild3737-3366-4537-b961-393062393237/_.jpg",
        category: "burgers",
        price: 100,
      },
    ],
    id: "5",
  },
];
</script>

<template>
  <Categories :categories="MENU_CATEGORIES" />
  <Products v-for="item in MOCK_ITEMS" :key="item.id" :="item" />
</template>
