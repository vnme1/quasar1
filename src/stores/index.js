import { store } from "quasar/wrappers";
import { createPinia } from "pinia";

//새로고침시 상태유지 https://github.com/prazdevs/pinia-plugin-persistedstate
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default store(({ ssrContext }) => {
  const pinia = createPinia();
  // You can add Pinia plugins here
  pinia.use(piniaPluginPersistedstate);

  return pinia;
});
