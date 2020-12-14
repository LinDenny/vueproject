import Vue from 'vue';
import router from '@/router';
import Layout from '@/components/Layout';
import '@/assets/css/common.css';

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
});
