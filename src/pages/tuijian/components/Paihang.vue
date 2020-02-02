<template>
  <div class="Paihang">
    <div class="ph">{{msg}}</div>
    <div class="mu5">
      <div class="mu5-cen">
        <div class="mu5-img" v-for="item of MuImg" :key="item.id">
          <img class="mu5-imgs" :src="item.imgUrl" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paihang",
  data() {
    return {
      msg: "排行榜",
      MuImg: [
        { id: "001", imgUrl: require("@/assets/images/paihang/排行1-1.jpg") },
        { id: "002", imgUrl: require("@/assets/images/paihang/排行1-2.jpg") },
        { id: "003", imgUrl: require("@/assets/images/paihang/排行1-3.jpg") },
        { id: "004", imgUrl: require("@/assets/images/paihang/排行1-4.jpg") },
        { id: "005", imgUrl: require("@/assets/images/paihang/排行1-5.jpg") }
      ]
    };
  }
};
</script>

<style lang="less">
.Paihang {
  width: 100%;
  background: #ebe9e9;
  height: 75px;
  margin-top: 685px;
  .ph {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
    background-color: rgb(236, 236, 236);
    letter-spacing: 10px;
  }
  .mu5 {
    width: 100%;
    height: 605px;
    background: #f3f1f1;
    border: 1px solid rgb(236, 235, 235);
    .mu5-cen {
      width: 1240px;
      height: 575px;
      margin: 0 auto;
      margin-top: 30px;
      .mu5-img {
          display: inline-block;
          margin: 0 3px;
        .mu5-imgs {
          margin: 0 7px;
        }
      }
    }
  }
}
</style>