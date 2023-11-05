import { createApp } from 'vue';
import { createPinia } from "pinia"; //引入pinia
import App from './App.vue';
import router from '@/router/index';
import "./assets/css/iconFont/iconfont.css";
import "element-plus/dist/index.css"; // 引入样式
import "element-plus/theme-chalk/dark/css-vars.css";
import ElementPlus from 'element-plus'

// reset css
import 'modern-normalize';
import '@/style/style.css';
import "./styles/tailwind.css";

// 阿里图标库
import './assets/iconfont/iconfont.css';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(ElementPlus)
app.use(pinia);
app.mount('#app');


