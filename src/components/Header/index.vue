<script lang="ts" setup>
import Container from "@/components/Layouts/Container.vue";
import Logo from "@/components/Logo.vue";
import Search from "@/components/Search.vue";
import CountLabel from "@/components/Labels/CountLabel.vue";
import IconCart from "@/components/Icons/IconCart.vue";
import IconOrders from "@/components/Icons/IconOrders.vue";
import { PATHNAMES } from "@/constants/routes";
import MenuItem from "./MenuItem.vue";

const MAX_COUNT_SHOWN_CART_ITEMS = 99;

const CART_MENU_ITEM_NAME = "Cart";
const ORDERS_MENU_ITEM_NAME = "Orders";

const countCartItems =
  100 > MAX_COUNT_SHOWN_CART_ITEMS ? `${MAX_COUNT_SHOWN_CART_ITEMS}+` : 99;
//CHANGE - винести в  функцію
</script>

<template>
  <header
    class="position sticky top-0 bg-white py-5 shadow-light-bottom-fog z-50"
  >
    <Container>
      <div
        class="flex justify-between items-center xl:items-stretch flex-wrap xl:flex-nowrap mx-auto xl:mx-0"
      >
        <RouterLink
          class="w-full xl:w-auto mb-1 sm:mb-2 lg:mb-5 xl:mb-0"
          :to="PATHNAMES.HOME"
        >
          <Logo />
        </RouterLink>
        <Search
          class="max-w-43 xs:max-w-58 sm:max-w-62 md:max-w-xs lg:max-w-112.5"
        />
        <nav class="flex">
          <RouterLink :to="PATHNAMES.ORDERS">
            <MenuItem :name="ORDERS_MENU_ITEM_NAME">
              <IconOrders />
            </MenuItem>
          </RouterLink>
          <RouterLink :to="PATHNAMES.CART">
            <MenuItem class="relative ml-4 md:ml-6" :name="CART_MENU_ITEM_NAME">
              <IconCart />
              <CountLabel
                class="absolute -top-3.5 -right-4 py-0.5 px-1.5 text-xs rounded-full"
                >{{ countCartItems }}</CountLabel
              >
            </MenuItem>
          </RouterLink>
        </nav>
      </div>
    </Container>
  </header>
</template>
