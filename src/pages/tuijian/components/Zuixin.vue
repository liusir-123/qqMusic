<template>
  <div class="zuixin">
    <div class="shou">
      <div>{{msg}}</div>
    </div>
    <div class="mu3">
      <div class="Nav">
        <!-- <div class="inp">
          <div class="iconfont icon-arrfill_u-copy"></div>
          <button class="you">播放全部</button>
        </div> -->
        <div class="nav" v-for="item of navs" :key="item.id">{{item.name}}</div>
      </div>
      <div class="wrapper" @mouseenter="enter" @mouseleave="leave">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <div class="zu1">
              <div class="zu-img" v-for="item in zu1" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu2">
              <div class="zu-img" v-for="item in zu2" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu3">
              <div class="zu-img" v-for="item in zu3" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="zu1">
              <div class="zu-img" v-for="item in zu1" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu2">
              <div class="zu-img" v-for="item in zu2" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu3">
              <div class="zu-img" v-for="item in zu3" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="zu1">
              <div class="zu-img" v-for="item in zu1" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu2">
              <div class="zu-img" v-for="item in zu2" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu3">
              <div class="zu-img" v-for="item in zu3" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="zu1">
              <div class="zu-img" v-for="item in zu1" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu2">
              <div class="zu-img" v-for="item in zu2" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
            <div class="zu3">
              <div class="zu-img" v-for="item in zu3" :key="item.id">
                <div class="kuang">
                  <img :src="item.imgUrl" alt />
                  <i class="cover"></i>
                  <i class="iconfont icon-play sw-i"></i>
                </div>
                <p class="p1">{{item.name1}}</p>
                <p class="p2">{{item.name2}}</p>
                <p class="p3">{{item.name3}}</p>
              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div>
          <div class="anniu1" v-show="seen">
            <div class="swiper-button-prev" slot="button-prev"></div>
          </div>
          <div class="anniu2" v-show="seen">
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zuixin",
  data() {
    return {
      msg: "新歌首发",
      seen: false,
      navs: [
        { id: 1, name: "最新" },
        { id: 2, name: "内地" },
        { id: 3, name: "港台" },
        { id: 4, name: "欧美" },
        { id: 5, name: "韩国" },
        { id: 6, name: "日本" }
      ],
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        loop: true,
        navigation: {
          prevEl: ".swiper-button-prev", // l 是字母 L 的小写，不是数字 1
          nextEl: ".swiper-button-next"
        }
      },
      zu1: [
        {
          id: "001",
          imgUrl: require("@/assets/images/xinge/xinge1-1.jpg"),
          name1: "Tonight",
          name2: "kesho",
          name3: "03:16"
        },
        {
          id: "002",
          imgUrl: require("@/assets/images/xinge/xinge1-2.jpg"),
          name1: "Help",
          name2: "Hyukoh",
          name3: "05:23"
        },
        {
          id: "003",
          imgUrl: require("@/assets/images/xinge/xinge1-3.jpg"),
          name1: "江雪",
          name2: "宝石Gem",
          name3: "03:52"
        }
      ],
      zu2: [
        {
          id: "001",
          imgUrl: require("@/assets/images/xinge/xinge1-4.jpg"),
          name1: "恼人的秋风",
          name2: "肖战",
          name3: "04:23"
        },
        {
          id: "002",
          imgUrl: require("@/assets/images/xinge/xinge1-5.jpg"),
          name1: "藏不住的微笑",
          name2: "好妹妹",
          name3: "02:14"
        },
        {
          id: "003",
          imgUrl: require("@/assets/images/xinge/xinge1-6.jpg"),
          name1: "岳阳楼记",
          name2: "康辉",
          name3: "04:55"
        }
      ],
      zu3: [
        {
          id: "001",
          imgUrl: require("@/assets/images/xinge/xinge1-7.jpg"),
          name1: "水形物语",
          name2: "周深",
          name3: "03:58"
        },
        {
          id: "002",
          imgUrl: require("@/assets/images/xinge/xinge1-8.jpg"),
          name1: "呗",
          name2: "椎名林檎",
          name3: "03:47"
        },
        {
          id: "003",
          imgUrl: require("@/assets/images/xinge/xinge1-9.jpg"),
          name1: "Get Me",
          name2: "kehlani",
          name3: "03:05"
        }
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
.zuixin {
  width: 100%;
  height: 75px;
  background: #ebe9e9;
  .shou {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgb(236, 236, 236);
    letter-spacing: 10px;
  }
  .mu3 {
    width: 100%;
    height: 480px;
    border: 1px solid #f0e5e5;
    background: #f3f1f1;
    
    .Nav {
    //   .inp {
    //   height: 37px;
    //   width: 124px;
    //   position: absolute;
    //   top: 30px;
    //   left: 320px;
    //   cursor: pointer;
    //   .iconfont {
    //     height: 30px;
    //     color: #cccccc;
    //     width: 10px;
    //     font-size: 36px;
    //     position: absolute;
    //   }
    //   .you {
    //     height: 37px;
    //     width: 124px;
    //     padding-left: 20px;
    //     cursor: pointer;
    //   }
    // }
      text-align: center;
      position: relative;
      .nav {
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
      height: 400px;
      background: #f3f1f1;
      position: relative;
      .swiper-container {
        // overflow:visible;
        width: 1250px;
        height: 370px;
        margin: 0 auto;
      }
      .swiper-pagination {
        position: absolute;
        top: 340px;
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
        top: 20%;
        left: 0;
        background: #e0dfdf;
        background:rgba(219, 218, 218, 0.5);
        z-index: 1;
        cursor: pointer;
        &:hover {
          background: #b6b5b5;
          background:rgba(219, 218, 218, 0.5);
        }
        .swiper-button-prev {
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
        top: 20%;
        right: 0;
        background: #e0dfdf;
        background:rgba(219, 218, 218, 0.5);
        z-index: 1;
        cursor: pointer;
        &:hover {
          background: #b6b5b5;
          background:rgba(219, 218, 218, 0.5);
        }
        .swiper-button-next {
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
      .zu1 {
        width: 410px;
        height: 340px;
        overflow: hidden;
        .zu-img {
          padding-bottom: 40px;
          padding-top: 14px;
          border-bottom: 1px solid rgb(230, 230, 230);
          .kuang{
            width: 88px;
            height: 88px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            &:hover .cover{
              opacity: 0.5;
            }
            .sw-i{
              font-size: 40px;
              position: absolute;
              top: 20%;
              left: 25%;
              color: white;
              opacity: 0;
            }
             &:hover .sw-i{
              transform: scale(1.5) translateZ(0);
              opacity: 0.9;
              transition: transform 1s;
          }
            .cover{
              background: #000;
              width: 88px;
              height: 88px;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              transition: opacity .5s;
            }
          }
          .p1 {
            margin-left: 100px;
            font-size: 14px;
            // color: #858383;
            font-weight: 400px;
            margin-top: -70px;
            width: 60px;
            &:hover {
              color: rgba(7, 223, 151, 1);
              cursor: pointer;
            }
          }
          .p2 {
            margin-left: 100px;
            font-size: 14px;
            color: #858383;
            font-weight: 400px;
            margin-top: -10px;
            width: 60px;
            &:hover {
              color: rgba(7, 223, 151, 1);
              cursor: pointer;
            }
          }
          .p3 {
            margin-left: 360px;
            font-size: 14px;
            color: #858383;
            font-weight: 400px;
            margin-top: -50px;
            width: 60px;
          }
        }
      }
      .zu2 {
        width: 410px;
        height: 340px;
        overflow: hidden;
        position: absolute;
        left: 420px;
        top: 0;
        .zu-img {
          padding-bottom: 40px;
          padding-top: 14px;
          border-bottom: 1px solid rgb(230, 230, 230);
          .kuang{
            width: 88px;
            height: 88px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            &:hover .cover{
              opacity: 0.5;
            }
            .sw-i{
              font-size: 40px;
              position: absolute;
              top: 20%;
              left: 25%;
              color: white;
              opacity: 0;
            }
             &:hover .sw-i{
              transform: scale(1.5) translateZ(0);
              opacity: 0.9;
              transition: transform 1s;
          }
            .cover{
              background: #000;
              width: 88px;
              height: 88px;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              transition: opacity .5s;
            }
          }
          .p1 {
            margin-left: 100px;
            font-size: 14px;
            // color: #858383;
            font-weight: 400px;
            margin-top: -70px;
            width: 90px;
            &:hover {
              color: rgba(7, 223, 151, 1);
              cursor: pointer;
            }
          }
          .p2 {
            margin-left: 100px;
            font-size: 14px;
            color: #858383;
            font-weight: 400px;
            margin-top: -10px;
            width: 60px;
            &:hover {
              color: rgba(7, 223, 151, 1);
              cursor: pointer;
            }
          }
          .p3 {
            margin-left: 360px;
            font-size: 14px;
            color: #858383;
            font-weight: 400px;
            margin-top: -50px;
            width: 60px;
          }
        }
      }
      .zu3 {
        width: 410px;
        height: 340px;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
        .zu-img {
          padding-bottom: 40px;
          padding-top: 14px;
          border-bottom: 1px solid rgb(230, 230, 230);
          .kuang{
            width: 88px;
            height: 88px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            &:hover .cover{
              opacity: 0.5;
            }
            .sw-i{
              font-size: 40px;
              position: absolute;
              top: 20%;
              left: 25%;
              color: white;
              opacity: 0;
            }
             &:hover .sw-i{
              transform: scale(1.5) translateZ(0);
              opacity: 0.9;
              transition: transform 1s;
          }
            .cover{
              background: #000;
              width: 88px;
              height: 88px;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              transition: opacity .5s;
            }
          }
          .p1 {
            margin-left: 100px;
            font-size: 14px;
            // color: #858383;
            font-weight: 400px;
            margin-top: -70px;
            width: 60px;
            &:hover {
              color: rgba(7, 223, 151, 1);
              cursor: pointer;
            }
          }
          .p2 {
            margin-left: 100px;
            font-size: 14px;
            color: #858383;
            font-weight: 400px;
            margin-top: -10px;
            width: 60px;
            &:hover {
              color: rgba(7, 223, 151, 1);
              cursor: pointer;
            }
          }
          .p3 {
            margin-left: 360px;
            font-size: 14px;
            color: #858383;
            font-weight: 400px;
            margin-top: -50px;
            width: 60px;
          }
        }
      }
    }
  }
}
</style>