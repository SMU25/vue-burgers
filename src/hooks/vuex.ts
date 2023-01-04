import { useStore } from "vuex";
import { storeInjectionKey } from "@/store/index";

export const useStoreApp = () => useStore(storeInjectionKey);
