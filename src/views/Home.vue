<template>
  <div>
    <h1>{{ getPair }}</h1>
    <app-pair></app-pair>
  </div>
</template>

<script>
import appPair from '../components/Pair'
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed:{
   ...mapGetters(["getPair"]),
  },
  components:{
    appPair
  }
};
</script>
<style scoped>
h1{
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
