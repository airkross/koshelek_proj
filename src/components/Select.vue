<template>
  <div>
    <div class="wrap">
      <label for="select">Выбрана пара: {{getPair}}</label>
      <select @change="setPair" v-model="pair" id="select">
        <option value="BTC/USDT">BTCUSDT</option>
        <option value="BNB/BTC">BNBBTC</option>
        <option value="ETH/BTC">ETHBTC</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pair: this.getPair,
    };
  },
  computed: {
    ...mapGetters(["getPair"]),
  },
  methods: {
    setPair() {
      this.$store.commit("setPair", this.pair);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  label {
    padding-top: 50px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 15px;
  }
  select {
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>