import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import router from './router/router';

createApp(App).use(router).mount('#app'); // 라우터를 사용{마운트)한다고 적어준다
