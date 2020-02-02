<template>
    <div class="mu2">
      <div class="wrapper" @mouseenter="enter" @mouseleave="leave">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide >
            <div class="sw-imgs" v-for="item of GedanSl1" :key="item.id">
              <img class="sw-img" :src="item.imgUrl" alt />
              <p class="cs">{{item.name1}}</P>
              <div class="bfl">
                <span>{{item.name2}}</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="sw-imgs" v-for="item of GedanSl2" :key="item.id">
              <img class="sw-img" :src="item.imgUrl" alt />
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
          <div class="swiper-button-prev" slot="button-prev" v-show="seen"></div>
          <div class="swiper-button-next" slot="button-next" v-show="seen"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Tswiper",
  data() {
    return {
      seen: false,
      swiperOption: {
        pagination: {el: ".swiper-pagination"},
        loop: true,
        navigation: {
          prevEl: '.swiper-button-prev',// l 是字母 L 的小写，不是数字 1
          nextEl: '.swiper-button-next'
        }
      },
      GedanSl1: [
        {id: '001', imgUrl: require('@/assets/images/tuijian/推荐1-1.jpg'), name1: '天真浪漫的自由主义1', name2: '播放量: 3.4万'},
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
    }
  }
};
</script>

<style lang="less">
  .mu2 {
    display: none;
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
      .swiper-button-prev{
        position: absolute;
        top: 35%;
      }
      .swiper-button-next{
        position: absolute;
        top: 35%;
      }
    }
  }
</style>
