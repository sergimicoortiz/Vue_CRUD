import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyLoad from 'vue3-lazyload';
import Toaster from "@meforma/vue-toaster";
import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueLazyLoad);
app.use(Toaster);

app.mount('#app');