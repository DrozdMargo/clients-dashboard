import Vue from 'vue';
import Router from 'vue-router';
import Clients from './components/ClientsList.vue';
import ClientInfo from './components/ClientInfo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'clients',
      component: Clients
    },
    {
      path: '/client/:id',
      name: 'client',
      component: ClientInfo
    },
    {
      path: '/client/new',
      name: 'clientNew',
      component: ClientInfo
    }
  ]
});
