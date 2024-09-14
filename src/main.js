import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';

// Import Quasar styles and any extras you may need (like Material Icons)
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css'; // Optional, for icons

const app = createApp(App);

app.use(Quasar, {
  // You can specify plugins here if you need them, like Dialog, Notify, etc.
});

app.mount('#app');
