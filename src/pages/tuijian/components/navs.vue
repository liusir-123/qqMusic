<template>
  <div tag="div" class="Header">
    <div
      class="header"
      v-for="item in GeHeader"
      :style="{color:item.path == path ? 'rgba(7, 223, 151, 1)' :  '' }"
      @click="toPath(item.path)"
      :key="item.id"
    >{{item.name}}</div>
  </div>
</template>
<script >
export default {
  name: "navs",
  data() {
    return {
      path: "/",
      GeHeader: [
        { id: "01", name: "首页", path: "/" },
        { id: "02", name: "歌手", path: "/Geshou" },
        { id: "03", name: "新碟" },
        { id: "04", name: "排行榜" },
        { id: "05", name: "分类歌单" },
        { id: "06", name: "电台" },
        { id: "07", name: "MV" },
        { id: "08", name: "数字专辑" },
        { id: "09", name: "票务" }
      ]
    };
  },
  mounted() {
    this.path = this.$route.path;
    // console.log()
  },
  methods: {
    toPath(path) {
      this.path = path;
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang='less' scoped >
.Header {
  text-align: center;
  background-color: #fff;
  .header {
    display: inline-block;
    margin: 15px 20px;
    font-size: 15px;
    &:hover {
      color: rgba(7, 223, 151, 1);
      cursor: pointer;
    }
  }
}
</style>

