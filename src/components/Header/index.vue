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

const countCartItems = 100 > MAX_COUNT_SHOWN_CART_ITEMS ? "99+" : 99;
//CHANGE - винестив  функцію
</script>

<template>
  <header class="bg-white py-5 px-4 shadow-light-bottom-fog">
    <Container>
      <div class="flex justify-between">
        <RouterLink :to="PATHNAMES.HOME">
          <Logo />
        </RouterLink>
        <Search />
        <nav class="flex">
          <RouterLink :to="PATHNAMES.ORDERS">
            <MenuItem :name="ORDERS_MENU_ITEM_NAME">
              <IconOrders />
            </MenuItem>
          </RouterLink>
          <RouterLink :to="PATHNAMES.CART">
            <MenuItem class="relative ml-6" :name="CART_MENU_ITEM_NAME">
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
