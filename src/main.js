import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import './style.css';
import '@dangojs/a-query-header/dist/css';
import '@dangojs/a-query-table/dist/css';
import '@dangojs/a-page-container/dist/css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);

app.mount('#app');
