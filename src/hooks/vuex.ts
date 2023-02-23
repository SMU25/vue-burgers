import { useStore } from "vuex";
import { storeInjectionKey } from "@/store";

export const useAppStore = () => useStore(storeInjectionKey);
