import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/simple-line-icons/css/simple-line-icons.css';
import '../node_modules/bulma/css/bulma.min.css';
import '../src/assets/scss/main.scss'
import { createPinia } from "pinia";
import { router } from "./router"
import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');
