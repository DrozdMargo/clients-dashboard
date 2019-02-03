import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clientsList: null
  },
  mutations: {
    setClientsList(state, data) {
      state.clientsList = data;
    },
    updateClient(state, data) {
      const ind = state.clientsList.clients.map((e) => e.id).indexOf(data.id);
      if (ind > -1) {
        state.clientsList.clients.splice(ind, 1, data);
      } else {
        state.clientsList.clients.push(data);
      }
    }
  },
  actions: {
    async updateUser({state, commit}, data) {
      // imitate req to api
      commit('updateClient', data);
    }
  }
});
