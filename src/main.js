import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import i18n  from '@/plugins/i18n';

import axios from "axios";
import VueAxios from "vue-axios";



createApp(App)
  .use(store)
  .use(i18n)
  .use(VueAxios, axios)
  .mount("#app");

  