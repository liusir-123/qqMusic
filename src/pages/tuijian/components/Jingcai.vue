<template>
  <div class="Jingcai">
    <div class="jing">{{msg}}</div>
    <div class="wrapper" @mouseenter="enter" @mouseleave="leave">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="jing-img">
            <div class="img-1" v-for="item of jingtu1" :key="item.id">
              <img class="imgs" :src="item.imgUrl" alt="">
            </div>
            <div class="img-2" v-for="item of jingtu2" :key="item.id">
              <img class="imgs" :src="item.imgUrl" alt="">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="jing-img">
            <div class="img-1" v-for="item of jingtu3" :key="item.id">
              <img class="imgs" :src="item.imgUrl" alt="">
            </div>
            <div class="img-2" v-for="item of jingtu4" :key="item.id">
              <img class="imgs" :src="item.imgUrl" alt="">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="jing-img">
            <div class="img-1" v-for="item of jingtu5" :key="item.id">
              <img class="imgs" :src="item.imgUrl" alt="">
            </div>
            <div class="img-2" v-for="item of jingtu6" :key="item.id">
              <img class="imgs" :src="item.imgUrl" alt="">
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
</template>

<script>
export default {
  name: "Jingcai",
  data() {
    return {
      msg: "精彩推荐",
      seen: false,
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        loop: true,
        navigation: {
          prevEl: ".swiper-button-prev", // l 是字母 L 的小写，不是数字 1
          nextEl: ".swiper-button-next"
        }
      },
      jingtu1: [
        {id: '001', imgUrl: require('@/assets/images/jingcai/精彩1-1.jpg')}
      ],
      jingtu2: [
        {id: '002', imgUrl: require('@/assets/images/jingcai/精彩1-2.jpg')}
      ],
      jingtu3: [
        {id: '003', imgUrl: require('@/assets/images/jingcai/精彩1-3.jpg')}
      ],
      jingtu4: [
        {id: '004', imgUrl: require('@/assets/images/jingcai/精彩1-4.jpg')}
      ],
      jingtu5: [
        {id: '005', imgUrl: require('@/assets/images/jingcai/精彩1-5.jpg')}
      ],
      jingtu6: [
        {id: '006', imgUrl: require('@/assets/images/jingcai/精彩1-6.jpg')}
      ],
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
.Jingcai {
  width: 100%;
  height: 75px;
  background: #ebe9e9;
  margin-top: 485px;
  .jing {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
    background-color: rgb(236, 236, 236);
    letter-spacing: 10px;
  }
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 350px;
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
      top: 300px;
      height: 10px;
    }
    .swiper-pagination-bullet-active {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .anniu1{
        border: 1px solid rgba(0, 0, 0, 0.05);
        width: 80px;
        height: 110px;
        position: absolute;
        top: 30%;
        left: 0;
        background: #e0dfdf;
        cursor: pointer;
        &:hover{
          background: #b6b5b5;
        }
        .swiper-button-prev{
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
        top: 30%;
        right: 0;
        background: #e0dfdf;
        cursor: pointer;
        &:hover{
          background: #b6b5b5;
        }
        .swiper-button-next{
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
    .img-1{
      width: 592px;
      height: 236px;
      margin-top: 50px;
      margin-left: 20px;
      .imgs{
        width: 100%;
        height: 100%;
      }
    }
    .img-2{
      width: 592px;
      height: 236px;
      margin-top: 50px;
      position: absolute;
      top: 0;
      right: 25px;
      .imgs{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>