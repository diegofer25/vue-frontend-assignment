import 'Styles/main.scss';
import Vue from 'vue';
import router from 'Router'
import store from 'Store'

import DefaultLayout from 'Layouts/default.vue';

new Vue({
  store,
  router,
  render: createElement => createElement(DefaultLayout),
  el: '#app'
});
