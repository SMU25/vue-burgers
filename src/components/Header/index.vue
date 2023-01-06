<script lang="ts" setup>
import Container from "@/components/Layouts/Container.vue";
import Logo from "@/components/Logo.vue";
import Search from "@/components/Search.vue";
import Button from "@/components/Button/index.vue";
import IconCart from "@/components/Icons/IconCart.vue";
import IconOrders from "@/components/Icons/IconOrders.vue";
import { PATHNAMES } from "@/constants/routes";
import MenuItem from "./MenuItem.vue";

const CART_NAME_MENU_ITEM = "Cart";
const ORDERS_NAME_MENU_ITEM = "Orders";
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
            <MenuItem :name="ORDERS_NAME_MENU_ITEM">
              <IconOrders />
            </MenuItem>
          </RouterLink>
          <Button>
            <MenuItem class="ml-6" :name="CART_NAME_MENU_ITEM">
              <IconCart />
            </MenuItem>
          </Button>
        </nav>
      </div>
    </Container>
  </header>
</template>
