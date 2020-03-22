<template>
  <div class="Choose">
    <div class="choose">
      <div class="remen">
        <div class="re">热门</div>
        <div class="danci" v-for="item in Danci" :key="item.id">{{item.name}}</div>
      </div>
      <div class="all">
        <div class="quan">全部</div>
        <div class="diqu" v-for="item in Diqu" :key="item.id">{{item.name}}</div>
      </div>
      <div class="zuhe">
        <div class="jie">全部</div>
        <div class="zu" v-for="item in Zuhe" :key="item.id">{{item.name}}</div>
      </div>
      <div class="redu">
          <div class="dou">全部</div>
          <div class="rd" v-for="item in Redu" :key="item.id">{{item.name}}</div>
      </div>
    </div>
    <div class="singer">
        <div class="singer-img" v-for="item in Singer1" :key="item.id">
          <div class="ring">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="mingzi">{{item.name}}</p>
        </div>
        <div class="singer-img" v-for="item in Singer2" :key="item.id">
          <div class="ring">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="mingzi">{{item.name}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Choose",
  data() {
    return {
      Danci: [
        { id: "001", name: "A" },
        { id: "002", name: "B" },
        { id: "003", name: "C" },
        { id: "004", name: "D" },
        { id: "005", name: "E" },
        { id: "006", name: "F" },
        { id: "007", name: "G" },
        { id: "008", name: "H" },
        { id: "009", name: "I" },
        { id: "0010", name: "J" },
        { id: "0011", name: "K" },
        { id: "0012", name: "L" },
        { id: "0013", name: "M" },
        { id: "0014", name: "N" },
        { id: "0015", name: "O" },
        { id: "0016", name: "P" },
        { id: "0017", name: "Q" },
        { id: "0018", name: "R" },
        { id: "0019", name: "S" },
        { id: "0020", name: "K" },
        { id: "0021", name: "U" },
        { id: "0022", name: "V" },
        { id: "0023", name: "W" },
        { id: "0024", name: "X" },
        { id: "0025", name: "Y" },
        { id: "0026", name: "Z" },
        { id: "0027", name: "#" },
      ],
      Diqu: [
        {id: '01',name: "内地"},
        {id: '02',name: "港台"},
        {id: '03',name: "欧美"},
        {id: '04',name: "日本"},
        {id: '05',name: "韩国"},
        {id: '06',name: "其他"},
      ],
      Zuhe: [
        {id: '1', name: "男"},
        {id: '2', name: "女"},
        {id: '3', name: "组合"},
      ],
      Redu: [
        {id: 1, name: "流行"},
        {id: 2, name: "嘻哈"},
        {id: 3, name: "摇滚"},
        {id: 4, name: "电子"},
        {id: 5, name: "民谣"},
        {id: 6, name: "R&B"},
        {id: 7, name: "民歌"},
        {id: 8, name: "轻音乐"},
        {id: 9, name: "爵士"},
        {id: 10, name: "古典"},
        {id: 11, name: "乡村"},
        {id: 12, name: "蓝调"},
      ],
      Singer1: [
        {id: '0001', imgUrl: require('@/assets/images/singer/header1-1 .jpg'),name: "D.E.M.邓紫棋"},
        {id: '0002', imgUrl: require('@/assets/images/singer/header1-2.jpg'), name: "周杰伦"},
        {id: '0003', imgUrl: require('@/assets/images/singer/header1-3.jpg'), name: "李荣浩"},
        {id: '0004', imgUrl: require('@/assets/images/singer/header1-4.jpg'), name: "陈响"},
        {id: '0005', imgUrl: require('@/assets/images/singer/header1-5.jpg'), name: "薛之谦"},
      ],
      Singer2: [
        {id: '0006', imgUrl: require('@/assets/images/singer/header1-6.jpg'),name: "林俊杰"},
        {id: '0007', imgUrl: require('@/assets/images/singer/header1-7.jpg'), name: "杨千嬅"},
        {id: '0008', imgUrl: require('@/assets/images/singer/header1-8.jpg'), name: "魏新雨"},
        {id: '0009', imgUrl: require('@/assets/images/singer/header1-9.jpg'), name: "音阙诗听"},
        {id: '00010', imgUrl: require('@/assets/images/singer/header1-10.jpg'), name: "Alan Walker"},
      ],
    };
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
.Choose {
  width: 100%;
  height: 800px;
  .choose {
    width: 1200px;
    height: 223px;
    margin: 0 auto;
    padding-top: 60px;
    .remen {
      width: 1160px;
      height: 43px;
      .re {
        width: 44px;
        height: 26px;
        background: rgb(49, 194, 124);
        color: 15px;
        color: rgb(255, 255, 255);
        text-align: center;
        display: inline-block;
        cursor: pointer;
        margin-right: 30px;
      }
      .danci {
        display: inline-block;
        width: 23px;
        height: 26px;
        font-size: 14px;
        text-align: center;
        padding-top: 0;
        cursor: pointer;
        margin-right: 14px;
        &:hover{
          color: rgb(49, 194, 124);
        }
      }
    }
    .all{
      width: 1160px;
      height: 43px;
      .quan{
        width: 44px;
        height: 26px;
        background: rgb(49, 194, 124);
        color: 15px;
        color: rgb(255, 255, 255);
        text-align: center;
        display: inline-block;
        cursor: pointer;
        margin-right: 30px;
      }
      .diqu{
        display: inline-block;
        width: 44px;
        height: 26px;
        font-size: 14px;
        text-align: center;
        padding-top: 0;
        cursor: pointer;
        margin-right: 14px;
        &:hover{
          color: rgb(49, 194, 124);
        }
      }
    }
    .zuhe{
      width: 1160px;
      height: 43px;
      .jie{
        width: 44px;
        height: 26px;
        background: rgb(49, 194, 124);
        color: 15px;
        color: rgb(255, 255, 255);
        text-align: center;
        display: inline-block;
        cursor: pointer;
        margin-right: 30px;
      }
      .zu{
        display: inline-block;
        width: 34px;
        height: 26px;
        font-size: 14px;
        text-align: center;
        padding-top: 0;
        cursor: pointer;
        margin-right: 14px;
        &:hover{
          color: rgb(49, 194, 124);
        }
      }
    }
    .redu{
      width: 1160px;
      height: 43px;
      .dou{
        width: 44px;
        height: 26px;
        background: rgb(49, 194, 124);
        color: 15px;
        color: rgb(255, 255, 255);
        text-align: center;
        display: inline-block;
        cursor: pointer;
        margin-right: 30px;
      }
      .rd{
        display: inline-block;
        width: 44px;
        height: 26px;
        font-size: 14px;
        text-align: center;
        padding-top: 0;
        cursor: pointer;
        margin-right: 14px;
        &:hover{
          color: rgb(49, 194, 124);
        }
      }
    }
  }
  .singer{
    width: 1200px;
    height: 525px;
    margin: 0 auto;
    padding-top: 10px;
    .singer-img{
      width: 235px;
      height: 245px;
      display: inline-block;
      .ring{
        width: 140px;
        height: 140px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
      }
      .mingzi{
        width: 140px;
        text-align: center;
        cursor: pointer;
        margin-top: 25px;
        &:hover{
          color: rgb(49, 194, 124);
        }
      }
    }
  }
}
</style>