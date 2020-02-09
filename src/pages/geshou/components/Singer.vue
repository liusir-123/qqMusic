<template>
  <div class="Singer">
    <ul class="singer">
      <li class="singer-nm" v-for="item in SinNm" :key="item.id">
        <a class="singer-a" href >{{item.name}}</a>
      </li>
    </ul>
    <div class="fanye">
      <a class="ye" href="">1</a>
      <a class="ye" href="">2</a>
      <a class="ye" href="">3</a>
      <a class="ye" href="">4</a>
      <a class="ye" href="">...</a>
      <a class="ye" href="">299</a>
      <a class="ye" href="">&gt;</a>
    </div>
    <div class="Bottom">
        <div class="adress">
            <div class="Bott-adre">
                {{copys}}
            </div>
            <div class="boots">
                {{zhus}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singer",
  data() {
    return {
      SinNm: [
        { id: "01", name: "陈雪凝" },
        { id: "02", name: "陈奕迅" },
        { id: "03", name: "任然" },
        { id: "04", name: "许嵩" },
        { id: "05", name: "毛不易" },
        { id: "06", name: "王力宏" },
        { id: "07", name: "蔡健雅" },
        { id: "08", name: "Vicetone" },
        { id: "09", name: "张韶涵" },
        { id: "010", name: "汪苏泷" },
        { id: "011", name: "庄心妍" },
        { id: "012", name: "李宇春" },
        { id: '013', name: "易烊千玺" },
        { id: "014", name: "Beyond" },
        { id: "015", name: "张杰" },
        { id: "016", name: "儿歌" },
        { id: "017", name: "吴亦凡" },
        { id: "018", name: "张靓颖" },
        { id: "019", name: "胜屿" },
        { id: "020", name: "那英" },
        { id: "021", name: "麦小兜" },
        { id: "022", name: "懒得写" },
        { id: "023", name: "Taylor Swift" },
        { id: "024", name: "林宥嘉" },
        { id: "025", name: "宋冬野" },
        { id: "026", name: "BlackPink" },
        { id: "027", name: "肖战" },
        { id: "028", name: "周深" },
        { id: "029", name: "华宇晨" },
        { id: "030", name: "曲肖冰" },
        { id: "031", name: "南征北战" },
        { id: "032", name: "陈粒" },
        { id: "033", name: "孙燕姿" },
        { id: "034", name: "杨宗纬" },
        { id: "035", name: "白小白" },
        { id: "036", name: "张宇" },
        { id: "037", name: "王俊凯" },
        { id: "038", name: "米津玄师" },
        { id: "039", name: "胡66" },
        { id: "040", name: "贾斯汀" },
        { id: "041", name: "永彬" },
        { id: "042", name: "金玟岐" },
        { id: "043", name: "于文文" },
        { id: "044", name: "胡夏" },
        { id: "045", name: "赵雷" },
        { id: "046", name: "张信哲" },
        { id: "047", name: "马建涛" },
        { id: "048", name: "张学友" },
        { id: "049", name: "李克勤" },
        { id: "050", name: "凤凰传奇" },
        { id: "051", name: "维兹" },
        { id: "052", name: "刘宪华" },
        { id: "053", name: "周传雄" },
        { id: "054", name: "五月天" },
        { id: "055", name: "张敬轩" },
        { id: "056", name: "田馥甄" },
        { id: "057", name: "魔力红" },
        { id: "058", name: "张碧晨" },
        { id: "059", name: "蒋雪儿" },
        { id: "060", name: "刘德华" },
        { id: "061", name: "掏粪" },
        { id: "062", name: "许巍" },
        { id: "063", name: "房东的猫" },
        { id: "064", name: "艾辰" },
        { id: "065", name: "莫文蔚" },
        { id: "066", name: "降央卓玛" },
        { id: "067", name: "韩红" },
        { id: "068", name: "刘若英" },
        { id: "069", name: "查理" },
        { id: "070", name: "大棒" },
      ],
      copys:"Copyright © 2020.01 - 2020.02 https://github.com/liusir-123/QQ-.git",
      zhus: "liusir-123 仿qq音乐 / 著"
    };
  }
};
</script>

<style lang="less">
.Singer {
  width: 100%;
  height: 860px;
  margin: 0 auto;
  .singer {
    width: 1200px;
    height: 520px;
    margin: 0 auto;
    list-style: none;
    padding: 0;
    .singer-nm {
      width: 230px;
      height: 36px;
      line-height: 36px;
      display: inline-block;
      .singer-a {
        cursor: pointer;
        text-decoration: none;
        color: black;
        font-size: 14px;
        &:hover {
          color: rgb(49, 194, 124);
        }
      }
    }
  }
  .fanye{
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    .ye{
        cursor: pointer;
        text-decoration: none;
        color: black;
        width: 50px;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        text-align: center;
        background: rgb(49, 194, 124);
        color: rgb(255, 255, 255);
        cursor: pointer;
        margin-right: 10px;
    }
  }
  .Bottom{
        width: 100%;
        height: 200px;
        margin-top: 40px;
        color: #999;
        background-color: #333;
        .adress{
            width: 100%;
            height: 200px;
            border: 1px solid #333;
            .Bott-adre{
                width: 500px;
                height: 25px;
                margin: 0 auto;
                margin-top: 110px;
                font-size: 12px;
                text-align: center;
            }
            .boots{
                width: 400px;
                height: 25px;
                margin: 0 auto;
                text-align: center;
                color: rgb(153, 153, 153);
                font-size: 15px;
            }
        }
    }
}
</style>