<template>
  <div class="Xindie">
    <div class="xin">{{msg}}</div>
    <div class="mu4">
      <div class="mu4-Nav">
        <div class="mu4-nav" v-for="item of MuNav" :key="item.id">{{item.name}}</div>
      </div>
      <div class="mu4-cen">
        <div class="mu4-zu1" v-for="item of mu4zu1" :key="item.id">
          <img :src="item.imgUrl" alt />
          <p class="mu4-p1">{{item.name1}}</p>
          <p class="mu4-p2">{{item.name2}}</p>
        </div>
        <!-- <div class="mu4-zu1">
          <img src="@/assets/images/xindie/xindie1-1.jpg" alt />
          <p class="mu4-p1">小生这厢有礼了</p>
          <p class="mu4-p2">乔洋</p>
        </div>
        <div class="mu4-zu1">
          <img src="@/assets/images/xindie/xindie1-1.jpg" alt />
          <p class="mu4-p1">小生这厢有礼了</p>
          <p class="mu4-p2">乔洋</p>
        </div>
        <div class="mu4-zu1">
          <img src="@/assets/images/xindie/xindie1-1.jpg" alt />
          <p class="mu4-p1">小生这厢有礼了</p>
          <p class="mu4-p2">乔洋</p>
        </div>
        <div class="mu4-zu1">
          <img src="@/assets/images/xindie/xindie1-1.jpg" alt />
          <p class="mu4-p1">小生这厢有礼了</p>
          <p class="mu4-p2">乔洋</p>
        </div> -->
        <div class="mu4-zu1" v-for="item of mu4zu2" :key="item.id">
          <img :src="item.imgUrl" alt />
          <p class="mu4-p1">{{item.name1}}</p>
          <p class="mu4-p2">{{item.name2}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Xindie",
  data() {
    return {
      msg: "新碟首发",
      MuNav: [
        { id: "001", name: "内地" },
        { id: "002", name: "港台" },
        { id: "003", name: "欧美" },
        { id: "004", name: "韩国" },
        { id: "005", name: "日本" },
        { id: "006", name: "其他" }
      ],
      mu4zu1: [
        {id: '01', imgUrl: require('@/assets/images/xindie/xindie1-1.jpg'),name1: "小生这厢有礼了", name2: "乔洋"},
        {id: '02', imgUrl: require('@/assets/images/xindie/xindie1-2.jpg'),name1: "炙热阳光",name2: "华语群星"},
        {id: '03', imgUrl: require('@/assets/images/xindie/xindie1-3.jpg'),name1: "红尘不悔",name2: "陆虎"},
        {id: '04', imgUrl: require('@/assets/images/xindie/xindie1-4.jpg'),name1: "武汉,你好吗",name2: "豆豆"},
        {id: '05', imgUrl: require('@/assets/images/xindie/xindie1-5.jpg'),name1: "三万光年",name2: "洛少爷"},
      ],
      mu4zu2: [
        {id: '0001', imgUrl: require('@/assets/images/xindie/xindie1-6.jpg'),name1: "你有多美", name2: "湖南卫视主持群星"},
        {id: '0002', imgUrl: require('@/assets/images/xindie/xindie1-7.jpg'),name1: "炙热阳光",name2: "群星"},
        {id: '0003', imgUrl: require('@/assets/images/xindie/xindie1-8.jpg'),name1: "挺住,武汉",name2: "陈思"},
        {id: '0004', imgUrl: require('@/assets/images/xindie/xindie1-9.jpg'),name1: "使命",name2: "崔子格"},
        {id: '0005', imgUrl: require('@/assets/images/xindie/xindie1-10.jpg'),name1: "因你勇敢",name2: "泥鳅Niko"},
      ],
    };
  }
};
</script>

<style lang="less">
.Xindie {
  width: 100%;
  height: 75px;
  background: #ebe9e9;
  margin-top: 350px;
  .xin {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
    background-color: rgb(236, 236, 236);
    letter-spacing: 10px;
  }
  .mu4 {
    width: 100%;
    height: 680px;
    border: 1px solid #f0e5e5;
    background: #f3f1f1;
    .mu4-Nav {
      text-align: center;
      .mu4-nav {
        display: inline-block;
        margin: 30px 25px;
        font-size: 16px;
        &:hover {
          color: rgba(7, 223, 151, 1);
          cursor: pointer;
        }
      }
    }
    .mu4-cen {
      width: 1230px;
      height: 600px;
      margin: 0 auto;
      .mu4-zu1 {
        width: 240px;
        height: 300px;
        display: inline-block;
        margin: 0 3px;
        .mu4-p1 {
          font-size: 14px;
          cursor: pointer;
          margin-top: 6px;
          &:hover {
            color: rgba(7, 223, 151, 1);
          }
        }
        .mu4-p2 {
          font-size: 13px;
          color: gray;
          cursor: pointer;
          margin-top: -5px;
          &:hover {
            color: rgba(7, 223, 151, 1);
          }
        }
      }
    }
  }
}
</style>