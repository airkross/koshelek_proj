import Vue from 'vue'
import Vuex from 'vuex'
import binance from 'binance'
Vue.use(Vuex);
Vue.use(binance);
export default new Vuex.Store({
  state: {
    bid: null,
    ask: null,
    currencyPair: 'BTC/USDT',
    ws: null
  },
  mutations: {
    setPair(state, pair) {
      state.currencyPair = pair;
      this.dispatch('fetchData', true)
    },
    setData(state, data) {
      state.bid = data.b;
      state.ask = data.a;
    }
  },
  actions: {
    fetchData({commit, state}, flag = false) {
      if(flag){
        state.ws.close();
      }
      state.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${state.currencyPair.replace('/','').toLocaleLowerCase()}@depth@1000ms`);
      state.ws.onmessage = function (e) {
        commit('setData', JSON.parse(e.data))
      }
     
    }
  },
  getters: {
    getBid(state) {
      return state.bid;
    },
    getAsk(state) {
      return state.ask
    },
    getPair(state) {
      return state.currencyPair
    }
  },
  modules: {}
})