<script lang="ts" setup>
import Container from "@/components/Layouts/Container.vue";
import Logo from "@/components/Logo.vue";
import Search from "@/components/Search.vue";
import IconCart from "@/components/Icons/IconCart.vue";
import IconOrders from "@/components/Icons/IconOrders.vue";
import { PATHNAMES } from "@/constants/routes";
import MenuItem from "./MenuItem.vue";

const CART_MENU_ITEM_NAME = "Cart";
const ORDERS_MENU_ITEM_NAME = "Orders";
</script>

<template>
  <header class="bg-white p-4 shadow-light-bottom-fog">
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
            <MenuItem class="ml-6" :name="CART_MENU_ITEM_NAME">
              <IconCart />
            </MenuItem>
          </RouterLink>
        </nav>
      </div>
    </Container>
  </header>
</template>
