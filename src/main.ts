import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { storeInjectionKey } from "./store";
import "./style.css";

createApp(App).use(store, storeInjectionKey).use(router).mount("#app");
