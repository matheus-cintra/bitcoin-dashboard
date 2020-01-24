import Vue from 'vue';
import VueCurrencyFilter from 'vue-currency-filter';
import VueToast from 'vue-toasted';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import currencyFilter from './filters/Currency';

Vue.config.productionTip = false;
Vue.use(VueCurrencyFilter, currencyFilter);
Vue.use(VueToast);
Vue.use(VueCookies);

Vue.$cookies.config('12h');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
