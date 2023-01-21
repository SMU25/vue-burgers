import { useStore } from "vuex";
import { storeInjectionKey } from "@/store/index";

export const useAppStore = () => useStore(storeInjectionKey);
