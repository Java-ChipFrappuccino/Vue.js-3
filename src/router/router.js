import { createWebHistory, createRouter } from 'vue-router';
import TitlePage from '../components/TitlePage.vue'; //자바스크립트같은 경우은 크게 상관없지만 컴포넌트를 불러올땐 확장자 기입을 해주자
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';
import Detail from '../components/Detail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TitlePage },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/detail/:id', component: Detail }, //id라는 변수값을 파라미터로 전달한다
  ], //경로(url)와 해당경로에 표시할 컴포넌트
});

export default router;
