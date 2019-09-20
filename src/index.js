import 'Styles/main.scss';
import Vue from 'vue';
import router from 'Router'
import store from 'Store'

import ResponsiveImageLoader from 'Plugins/responsive-image-loader'
Vue.use(ResponsiveImageLoader, {
  tablet: 600,
  desktop: 1264
})

import { App } from 'Components/pages';

new Vue({
  store,
  router,
  render: createElement => createElement(App),
  el: '#app'
});
