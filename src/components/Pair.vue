<template>
  <div>
    <div class="wrap">
      <!-- ask -->
      <div class="table">
        <div class="title">ASK</div>
        <div class="head">
          <div class="head-sub">Amount</div>
          <div class="head-sub">Price</div>
          <div class="head-sub">Total</div>
        </div>
        <div class="body">
          <div class="row" v-for="(ask, index) in getAsk" :key="index">
            <div class="body-item">{{ask[1] | double}}</div>
            <div class="body-item">{{ask[0].replace(/0*$/,"")}}</div>
            <div class="body-item">{{ask[0] * ask[1] | double}}</div>
          </div>
        </div>
      </div>
      <!-- bid -->
      <div class="table">
        <div class="title">BID</div>
        <div class="head">
          <div class="head-sub">Amount</div>
          <div class="head-sub">Price</div>
          <div class="head-sub">Total</div>
        </div>
        <div class="body">
          <div class="row" v-for="(ask, index) in getBid" :key="index">
            <div class="body-item">{{ask[1] | double}}</div>
            <div class="body-item">{{ask[0].replace(/0*$/,"")}}</div>
            <div class="body-item">{{ask[0] * ask[1] | double}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["getAsk", "getBid"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
}
.wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-bottom: 50px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  .table {
    max-width: 500px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 30px 15px;
    border-radius: 5px;
    &:first-child {
      margin-right: 15px;
    }
    @media screen and (max-width: 767px) {
      &:first-child {
        margin-right: unset;
        margin-bottom: 30px;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      padding-bottom: 30px;
      font-weight: 700;
      border-bottom: 1px solid #000;
    }
    .head {
      display: flex;
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #000;
      justify-content: space-between;
      &-sub {
        width: 33%;
        text-align: center;
        text-transform: uppercase;
        &:not(:last-child) {
          border-right: 1px solid black;
        }
        &:nth-child(3) {
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
        @media screen and (max-width: 767px) {
          width: 50%;
        }
        &:nth-child(2) {
          @media screen and (max-width: 767px) {
            border-right: none;
          }
        }
      }
    }
    .body {
      @media screen and (max-width: 767px) {
        height: 300px;
        overflow-y: scroll;
      }
      .row {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        &:not(:last-child) {
          border-bottom: 1px solid #000;
        }
        .body-item {
          width: 33%;
          text-align: center;
          text-transform: uppercase;
          &:not(:last-child) {
            border-right: 1px solid black;
          }
          &:nth-child(3) {
            @media screen and (max-width: 767px) {
              display: none;
            }
          }
          @media screen and (max-width: 767px) {
            width: 50%;
          }
          &:nth-child(2) {
            @media screen and (max-width: 767px) {
              border-right: none;
            }
          }
        }
      }
    }
  }
}
</style>