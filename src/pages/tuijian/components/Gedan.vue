<template>
  <div class="gedan">
    <!-- <div class="Headers">
      <div class="header" v-for="item in GeHeader" :style="{color:item.path == path ? 'rgba(7, 223, 151, 1)' :  '' }"  @click="toPath(item.path)" :key="item.id">{{item.name}}</div>
    </div> -->
    <div class="tui">
      {{msg}}
    </div>
    <div class="mu">
      <div class="xuan">
        <div class="xuanze" v-for="item in navss" :key="item.id">{{item.name}}</div>
      </div>
      <div class="wrapper" @mouseenter="enter" @mouseleave="leave">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <div class="sw-imgs" v-for="item of GedanSl1" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="cs">{{item.name1}}</P>
              <div class="bfl">
                <span>{{item.name2}}</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="sw-imgs" v-for="item of GedanSl2" :key="item.id">
              <div class="kuang">
                <img class="sw-img" :src="item.imgUrl" alt />
                <i class="cover"></i>
                <i class="iconfont icon-play sw-i"></i>
              </div>
              <p class="cs">{{item.name1}}</P>
              <div class="bfl">
                <span>{{item.name2}}</span>
              </div>
            </div>
          </swiper-slide>
          <!-- <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>-->
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
        <div>
          <div class="anniu1" v-show="seen">
            <div class="swiper-button-prev button-prev0" slot="button-prev"></div>
          </div>
          <div class="anniu2" v-show="seen">
            <div class="swiper-button-next button-next0" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TuijianNavs from '@/pages/tuijian/components/navs'
export default {
  name: "Gedan",
  data () {
    return {
      // path: "/",
      components: {
        TuijianNavs,
      },
      msg: "歌单推荐",
      seen: false,
      navss: [
        { id: 1, name: "为你推荐" },
        { id: 2, name: "九月推荐" },
        { id: 3, name: "网络歌曲" },
        { id: 4, name: "励志" },
        { id: 5, name: "官方歌单" },
        { id: 6, name: "情歌" }
      ],
      // GeHeader:[
      //   {id:'01', name: "首页",path:'/'},
      //   {id:'02', name: "歌手",path:'/Geshou'},
      //   {id:'03', name: "新碟"},
      //   {id:'04', name: "排行榜"},
      //   {id:'05', name: "分类歌单"},
      //   {id:'06', name: "电台"},
      //   {id:'07', name: "MV"},
      //   {id:'08', name: "数字专辑"},
      //   {id:'09', name: "票务"}
      // ],
      swiperOption: {
        pagination: {el: ".swiper-pagination"},
        loop: true,
        navigation: {
          prevEl: '.button-prev0',// l 是字母 L 的小写，不是数字 1
          nextEl: '.button-next0'
        }
      },
      GedanSl1: [
        {id: '001', imgUrl: require('@/assets/images/tuijian/推荐1-1.jpg'), name1: '天真浪漫的自由主义', name2: '播放量: 3.4万'},
        {id: '002', imgUrl: require('@/assets/images/tuijian/推荐1-2.jpg'), name1: '散步进行时：日语民谣女声', name2: '播放量: 25.8万'},
        {id: '003', imgUrl: require('@/assets/images/tuijian/推荐1-3.jpg'), name1: '玩转Flow：女性说唱力量', name2: '播放量: 4.8万'},
        {id: '004', imgUrl: require('@/assets/images/tuijian/推荐1-4.jpg'), name1: '校园广播站：经典励志曲', name2: '播放量: 437.2万'},
        {id: '005', imgUrl: require('@/assets/images/tuijian/推荐1-5.jpg'), name1: '诗意古风：世间繁华，南柯一梦', name2: '播放量: 6.9万'},
      ],
      GedanSl2: [
        {id: '001', imgUrl: require('@/assets/images/tuijian/推荐1-6.jpg'), name1: '崛起一族：新势力女声Rap', name2: '播放量: 11.0万'},
        {id: '002', imgUrl: require('@/assets/images/tuijian/推荐1-7.jpg'), name1: '我看清了世界，也看清了你', name2: '播放量: 10.7万'},
        {id: '003', imgUrl: require('@/assets/images/tuijian/推荐1-8.jpg'), name1: '蒸汽波|情乱夜梦东京', name2: '播放量: 10.0万'},
        {id: '004', imgUrl: require('@/assets/images/tuijian/推荐1-9.jpg'), name1: '柔情男声如一股暖意流遍全身', name2: '播放量: 8.5万'},
        {id: '005', imgUrl: require('@/assets/images/tuijian/推荐1-10.jpg'), name1: '这位少侠请留步', name2: '播放量: 14.7万'},
      ]
    };
  },
  methods: {
    enter: function () {
      this.seen = true;
    },
    leave: function () {
      this.seen = false;
    },
    toPath(path){
      this.path = path
      this.$router.push({
        path
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
body{
  margin: 0;
  padding: 0;
}
.gedan {
  width: 100%;
  background: #ebe9e9;
  height: 537px;
  // .Headers{
  //   text-align: center;
  //   background-color: #fff;
  //   .header{
  //     display: inline-block;
  //     margin: 15px 20px;
  //     font-size: 15px;
  //     &:hover {
  //       color: rgba(7, 223, 151, 1);
  //       cursor: pointer;
  //     }
  //   }
  // }
  .tui{
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgb(236, 236, 236);
    letter-spacing: 10px;
    // line-height: 100px;
  }
  .mu {
    width: 100%;
    height: 455px;
    border: 1px solid #f0e5e5;
    background: #f3f1f1;
    // margin-top: 10px;
    .xuan {
      text-align: center;
      .xuanze {
        display: inline-block;
        margin: 30px 20px;
        font-size: 15px;
        &:hover {
          color: rgba(7, 223, 151, 1);
          cursor: pointer;
        }
      }
    }
    .wrapper {
      overflow: hidden;
      width: 100%;
      height: 370px;
      background: #f3f1f1;
      position: relative;
      .swiper-container{
        // overflow:visible;
        width: 1250px;
        height: 350px;
        margin: 0 auto;
      }
      .swiper-pagination{
        position: absolute;
        top: 330px;
        height: 10px;
      }
      .swiper-pagination-bullet-active{
        background-color: rgba(0,0,0,.4)
      }
      .sw-imgs{
        width: 240px;
        height: 300px;
        // border: 1px solid red;
        display: inline-block;
        .kuang{
          width: 226px;
          height: 224px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          .sw-i{
            font-size: 60px;
            position: absolute;
            top: 35%;
            left: 35%;
            color: white;
            opacity: 0;
          }
          &:hover .sw-i{
            transform: scale(1.5) translateZ(0);
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
        .cs{
          font-size: 13px;
          cursor: pointer;
          &:hover{
            color: rgba(7, 223, 151, 1);
          }
        }
        .bfl{
          font-size: 13px;
          color: gray;
        }
      }
      .anniu1{
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
        &:hover{
          background: #b6b5b5;
          background:rgba(219, 218, 218, 0.8);
        }
        .button-prev0{
          margin-left: -10px;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E") !important;
          width: 80px;
          height: 110px;
          margin-top: -55px;
          &:focus{
            outline: none;
          }
        }
      }
      .anniu2{
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
        &:hover{
          background: #b6b5b5;
          background:rgba(219, 218, 218, 0.8);
        }
        .button-next0{
          margin-right: -10px;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E")  !important;
          transform:rotate(180deg);
          width: 80px;
          height: 110px;
          margin-top: -55px;
          &:focus{
            outline: none;
          }
        }
      }
    }
  }
}
</style>
