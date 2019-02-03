import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import App from './App.vue';
import router from './router';
import store from './store';
import clients from './data/clients';

Vue.use(Vuetify, {
  iconfont: 'md',
});

Vue.config.productionTip = false;

store.commit('setClientsList', clients);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
