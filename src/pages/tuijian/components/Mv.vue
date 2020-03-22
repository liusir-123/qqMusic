<template>
  <div class="Mv">
    <div class="mv-ye">{{msg}}</div>
    <div class="mu6">
      <div class="mu6-navs">
        <div class="mu6-nav" v-for="item in MvNav" :key="item.id">{{item.name}}</div>
      </div>
      <div class="wrapper" @mouseenter="enter" @mouseleave="leave">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <div class="mu6-tu" v-for="item in MvTu1" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
            <div class="mu6-tu" v-for="item in MvTu2" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
            <!-- <div class="mu6-tu">
              <img src="@/assets/images/mv/mv1-1.jpg" alt />
              <p class="mu6-p1">武汉，你好吗</p>
              <p class="mu6-p2">朱一龙</p>
              <div class="ico"></div>
            </div> -->
          </swiper-slide>
          <swiper-slide>
            <div class="mu6-tu" v-for="item in MvTu1" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
              <div class="mu6-tu" v-for="item in MvTu2" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
              <div class="mu6-tu" v-for="item in MvTu1" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
              <div class="mu6-tu" v-for="item in MvTu2" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
              <div class="mu6-tu" v-for="item in MvTu1" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
              <div class="mu6-tu" v-for="item in MvTu2" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="mu6-p1">{{item.name1}}</p>
              <p class="mu6-p2">{{item.name2}}</p>
              <div class="iconfont">
                <span class="shu">{{item.name3}}</span>
              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div>
          <div class="anniu1" v-show="seen">
            <div class="swiper-button-prev button-prev4" slot="button-prev"></div>
          </div>
          <div class="anniu2" v-show="seen">
            <div class="swiper-button-next button-next4" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mv",
  data() {
    return {
      msg: "MV",
      seen: false,
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        loop: true,
        navigation: {
          prevEl: ".button-prev4", // l 是字母 L 的小写，不是数字 1
          nextEl: ".button-next4"
        }
      },
      MvNav: [
        { id: 1, name: "精选" },
        { id: 2, name: "内地" },
        { id: 3, name: "韩国" },
        { id: 4, name: "港台" },
        { id: 5, name: "欧美" },
        { id: 6, name: "日本" }
      ],
      MvTu1: [
        {id: '001', imgUrl: require("@/assets/images/mv/mv1-1.jpg"), name1: "武汉，你好吗", name2: "朱一龙",name3: "6.5万"},
        {id: '002', imgUrl: require("@/assets/images/mv/mv1-2.jpg"), name1: "让世界充满爱", name2: "青春有你2",name3: "6.7万"},
        {id: '003', imgUrl: require("@/assets/images/mv/mv1-3.jpg"), name1: "HOW ARE YOU", name2: "SUHO",name3: "1.4万"},
        {id: '004', imgUrl: require("@/assets/images/mv/mv1-4.jpg"), name1: "physical", name2: "Dua Lipa",name3: "4.1万"},
        {id: '005', imgUrl: require("@/assets/images/mv/mv1-5.jpg"), name1: "我们一定会胜利", name2: "华语群星",name3: "1.2万"}
      ],
       MvTu2: [
        {id: '006', imgUrl: require("@/assets/images/mv/mv1-6.jpg"), name1: "美国的甜心小姐", name2: "swift",name3: "4.5万"},
        {id: '007', imgUrl: require("@/assets/images/mv/mv1-7.jpg"), name1: "ALL ROR YOU", name2: "水晶男孩",name3: "2.6万"},
        {id: '008', imgUrl: require("@/assets/images/mv/mv1-8.jpg"), name1: "nice to meet ya", name2: "Meghan",name3: "3.6万"},
        {id: '009', imgUrl: require("@/assets/images/mv/mv1-9.jpg"), name1: "something about you", name2: "周兴哲",name3: "4.9万"},
        {id: '0010', imgUrl: require("@/assets/images/mv/mv1-10.jpg"), name1: "stay with you", name2: "林俊杰",name3: "64.8万"}
      ]
    };
  },
  methods: {
    enter: function() {
      this.seen = true;
    },
    leave: function() {
      this.seen = false;
    }
  }
};
</script>

<style lang="less">
.Mv {
  width: 100%;
  height: 672px;
  background: #ebe9e9;
  .mv-ye {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgb(236, 236, 236);
    letter-spacing: 10px;
  }
  .mu6 {
    width: 100%;
    height: 590px;
    border: 1px solid #f0e5e5;
    background: #f3f1f1;
    .mu6-navs {
      text-align: center;
      .mu6-nav {
        display: inline-block;
        margin: 30px 25px;
        font-size: 16px;
        &:hover {
          color: rgba(7, 223, 151, 1);
          cursor: pointer;
        }
      }
    }
    .wrapper {
      overflow: hidden;
      width: 100%;
      height: 470px;
      background: #f3f1f1;
      position: relative;
      .swiper-container {
        // overflow:visible;
        width: 1250px;
        height: 470px;
        margin: 0 auto;
      }
      .swiper-pagination {
        position: absolute;
        top: 450px;
        height: 10px;
      }
      .swiper-pagination-bullet-active {
        background-color: rgba(0, 0, 0, 0.4);
      }
      .anniu1 {
        border: 1px solid rgba(0, 0, 0, 0.05);
        width: 80px;
        height: 110px;
        position: absolute;
        top: 30%;
        left: 0;
        background: #e0dfdf;
        background:rgba(219, 218, 218, 0.5);
        z-index: 1;
        cursor: pointer;
        &:hover {
          background: #b6b5b5;
          background:rgba(219, 218, 218, 0.5);
        }
        .button-prev4 {
          margin-left: -10px;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E") !important;
          width: 80px;
          height: 110px;
          margin-top: -55px;
          &:focus {
            outline: none;
          }
        }
      }
      .anniu2 {
        border: 1px solid rgba(0, 0, 0, 0.05);
        width: 80px;
        height: 110px;
        position: absolute;
        top: 30%;
        right: 0;
        background: #e0dfdf;
        background:rgba(219, 218, 218, 0.5);
        z-index: 1;
        cursor: pointer;
        &:hover {
          background: #b6b5b5;
          background:rgba(219, 218, 218, 0.5);
        }
        .button-next4 {
          margin-right: -10px;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E") !important;
          transform: rotate(180deg);
          width: 80px;
          height: 110px;
          margin-top: -55px;
          &:focus {
            outline: none;
          }
        }
      }
      .mu6-tu {
        width: 240px;
        height: 230px;
        display: inline-block;
        margin: 0 1px;
        .kuang{
          width: 226px;
          height: 126px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          .sw-i{
            font-size: 60px;
            position: absolute;
            top: 28%;
            left: 40%;
            color: white;
            opacity: 0;
          }
          &:hover .sw-i{
            transform: scale(1.2) translateZ(0);
            opacity: 0.9;
            transition: transform 1s;
          }
          &:hover .cover{
            opacity: 0.5;
            transition: opacity 2s;
          }
          &:hover .sw-img{
            transform: scale(1.2) translateZ(0);
            transition: transform 2s;
          }
          .cover{
            background: #000;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 2s;
          }
        }
        .mu6-p1 {
          font-size: 14px;
          cursor: pointer;
          margin-top: 6px;
          &:hover {
            color: rgba(7, 223, 151, 1);
          }
        }
        .mu6-p2 {
          font-size: 13px;
          color: gray;
          cursor: pointer;
          margin-top: -10px;
          &:hover {
            color: rgba(7, 223, 151, 1);
          }
        }
        .iconfont{
            width: 65px;
            height: 20px;
            margin-top: -5px;
            display: inline-block;
            .shu{
            font-size: 14px;
            color: #b6b5b5;
        }
        }
        
      }
    }
  }
}
</style>