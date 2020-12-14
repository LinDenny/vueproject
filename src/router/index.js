import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
  },
  {
    path: '/profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/pages/profile/index.vue')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/404/index.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

export default router;