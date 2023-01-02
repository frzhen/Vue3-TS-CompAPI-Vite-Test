import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/simple-line-icons/css/simple-line-icons.css';
import '../node_modules/bulma/css/bulma.min.css';
import "highlight.js/styles/atom-one-dark.css";
import '../src/assets/scss/main.scss'
import { createPinia } from "pinia";
import { router } from "./routers";
import { createApp } from 'vue';
import App from './App.vue';
import { useUsers } from "./store/users";
import { usePosts } from "./store/posts";

const app = createApp(App);
app.use(createPinia());

// The following should be after Pinia is used
const usersStore = useUsers();
const postsStore = usePosts();

// Race condition solution: to execute api request before use router(with Navigation Guard)
Promise.all([
  usersStore.authenticate(),
  postsStore.fetchPosts()
]).then(() => {
  app.use(router);
  app.mount('#app');
})


