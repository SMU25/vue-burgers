<script lang="ts" setup>
import Categories from "@/components/Categories/index.vue";
import Products from "@/components/Products/index.vue";
import { MENU_CATEGORIES } from "@/constants/categories";

const MOCK_ITEMS = [
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
  {
    id: "5",
    title: "Double Cheeseburger",
    imgUrl:
      "https://thumb.tildacdn.com/tild3965-6534-4933-b762-393533633237/-/resize/720x/-/format/webp/_.jpg",
    category: "burgers",
    price: 3,
  },
  {
    id: "6",
    title: "Fish Burger",
    imgUrl:
      "https://thumb.tildacdn.com/tild3432-6231-4436-a562-343638393161/-/resize/720x/-/format/webp/_.jpg",
    category: "burgers",
    price: 2.1,
  },
  {
    id: "7",
    title: "Cheeseburger",
    imgUrl:
      "https://thumb.tildacdn.com/tild3736-6237-4933-a331-643334346630/-/resize/720x/-/format/webp/photo.jpg",
    category: "burgers",
    price: 2.5,
  },
  {
    id: "8",
    title: "French Fries Standard, 100 g.",
    imgUrl:
      "https://thumb.tildacdn.com/tild3830-3733-4061-a539-666339396232/-/resize/534x/-/format/webp/photo.JPG",
    category: "potato",
    price: 2,
  },
  {
    id: "9",
    title: "French Fries Big, 150 g.",
    imgUrl:
      "https://thumb.tildacdn.com/tild3830-3733-4061-a539-666339396232/-/resize/534x/-/format/webp/photo.JPG",
    category: "potato",
    price: 2.4,
  },
  {
    id: "10",
    title: "Chicken Nuggets",
    imgUrl:
      "https://thumb.tildacdn.com/tild3965-3966-4562-a632-386133633064/-/format/webp/__6912.jpg",
    category: "nuggets",
    price: 3.1,
  },
  {
    id: "11",
    title: "BarbeQ",
    imgUrl:
      "https://thumb.tildacdn.com/tild6333-3039-4133-b930-393362386535/-/resize/246x/-/format/webp/photo.png",
    category: "sauces",
    price: 1,
  },
  {
    id: "12",
    title: "Cheesy",
    imgUrl:
      "https://thumb.tildacdn.com/tild3737-6464-4266-a434-366662633061/-/resize/246x/-/format/webp/photo.png",
    category: "sauces",
    price: 1,
  },
  {
    id: "13",
    title: "Ketchup",
    imgUrl:
      "https://thumb.tildacdn.com/tild6665-6232-4735-b630-663936396537/-/resize/246x/-/format/webp/photo.png",
    category: "sauces",
    price: 1,
  },
  {
    id: "14",
    title: "Сhili",
    imgUrl:
      "https://thumb.tildacdn.com/tild6330-3763-4862-a537-653836653438/-/resize/246x/-/format/webp/_.png",
    category: "sauces",
    price: 1,
  },
  {
    id: "15",
    title: "Coca Cola 0.5 l.",
    imgUrl:
      "https://thumb.tildacdn.com/tild3536-3164-4439-b634-303132646436/-/resize/720x/-/format/webp/3.jpg",
    category: "drinks",
    price: 100,
  },
  {
    id: "16",
    title: "Sprite 0.5 l.",
    imgUrl:
      "https://thumb.tildacdn.com/tild3031-3533-4632-b837-336239326137/-/resize/720x/-/format/webp/6.jpg",
    category: "drinks",
    price: 100,
  },
  {
    id: "17",
    title: "Fanta 0.5 l.",
    imgUrl:
      "https://thumb.tildacdn.com/tild3735-3764-4630-b239-643932356336/-/resize/720x/-/format/webp/8.jpg",
    category: "drinks",
    price: 100,
  },
  {
    id: "18",
    title: "Water 0.5 l.",
    imgUrl:
      "https://thumb.tildacdn.com/tild3937-3138-4364-b633-313964643861/-/resize/720x/-/format/webp/10.jpg",
    category: "drinks",
    price: 100,
  },
];
</script>

<template>
  <Categories :categories="MENU_CATEGORIES" />
  <!-- <template v-if="true">
    <Products
      v-for="{ id, name } in MENU_CATEGORIES"
      :key="id"
      :title="name"
      :items="MOCK_ITEMS"
      isFilter
    />
  </template>
  <Products v-else :title="MENU_CATEGORIES[1].name" :items="MOCK_ITEMS" /> -->
</template>
