<template>
  <div class="Headers">
    <!-- <div class="header">
      <div class="Hea-hea" v-for="item in GeHeader" :style="{color:item.path == path ? 'rgba(7, 223, 151, 1)' :  '' }"  @click="toPath(item.path)" :key="item.id">{{item.name}}</div>
    </div> -->
    <div class="mu1" :style="{backgroundImage:'url('+require('@/assets/images/singer/heise.jpg')+')'}">
      <div class="mu1-cen">
        <div class="mu1-p1">
          <p class="hh1">万千歌手 近在眼前</p>
        </div>
         <div class="mu1-p2">
          <p class="hh2">登录查看你关注的歌手</p>
        </div>
        <div class="mu1-p3">
          <div class="mu1-hh3">
            <button class="but">立即登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TuijianNavs from '@/pages/tuijian/components/navs'
export default {
  name: "Header",
  data () {
    return {
      // path:'/Geshou',
      GeHeader:[
        {id:'01', name: "首页",path:'/'},
        {id:'02', name: "歌手",path:'/Geshou'},
        {id:'03', name: "新碟"},
        {id:'04', name: "排行榜"},
        {id:'05', name: "分类歌单"},
        {id:'06', name: "电台"},
        {id:'07', name: "MV"},
        {id:'08', name: "数字专辑"},
        {id:'09', name: "票务"}
      ] ,
    }
  },
  methods: {
    toPath(path){
      this.path = path
      this.$router.push({
        path
      })
    }
  }
};
</script>

<style lang="less">
.Headers {
  width: 100%;
  height: 380px;
  // .header {
  //   text-align: center;
  //   background-color: #fff;
  //   .Hea-hea{
  //   display: inline-block;
  //     margin: 15px 20px;
  //     font-size: 15px;
  //     &:hover {
  //       color: rgba(7, 223, 151, 1);
  //       cursor: pointer;
  //     }
  //   }
  // }
  .mu1{
    width: 100%;
    height: 380px;
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    color: #fff;
    .mu1-cen{
      width: 600px;
      height: 200px;
      margin: 0 auto;
      margin-top: 100px;
      .mu1-p1{
        text-align: center;
        height: 80px;
        width: 500px;
        margin: 0 auto;
        font-weight: normal;
        margin-top: 120px;
        .hh1{
          font-size: 50px;
          margin: 0;
        }
      }
      .mu1-p2{
        text-align: center;
        height: 40px;
        width: 500px;
        margin: 0 auto;
        font-weight: normal;
        .hh2{
          font-size: 20px;
          color: rgb(250, 242, 242);
          margin: 0;
        }
      }
      .mu1-p3{
        text-align: center;
        height: 58px;
        width: 500px;
        margin: 0 auto;
        font-weight: normal;
        .mu1-hh3{
          margin-top: 10px;
          .but{
            width: 174px;
            height: 48px;
            background:rgba(10, 10, 10, 0.1);
            color: #fff;
            border: 1px solid gray;
            font-size: 18px;
            cursor: pointer;
            // border:2px solid transparent;
            // transition: all 0.2s linear;
            &:hover{
              border-color: #f0ecec;
            }
            &:focus{
              outline: none;
            }
          }
        }
      }
    }
  }
}
</style>