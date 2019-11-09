import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCalc: {}
  },
  mutations: {
    SET_CURRENT_CALC(state, payload) {
      state.currentCalc = payload
    },

    RESET_CURRENT_CALC(state) {
      state.currentCalc = {}
    }
  },
  actions: {
    setCurrentCalc({ commit }, payload) {
      commit("SET_CURRENT_CALC", payload);
    },

    resetCurrentCalc({ commit }) {
      commit("RESET_CURRENT_CALC");
    }
  }
})
