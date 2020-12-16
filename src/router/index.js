import Vue from 'vue';
import VueRouter from 'vue-router';
import lazyLoadView from '@/utils/lazyload';
const home = () => lazyLoadView(import(/* webpackChunkName: "home" */ '@/pages/home/index.vue'));
const profile = () => lazyLoadView(import(/* webpackChunkName: "profile" */ '@/pages/profile/index.vue'));
const notFund = () => lazyLoadView(import(/* webpackChunkName: "404" */ '@/pages/404/index.vue'));

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/404',
    component: notFund
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