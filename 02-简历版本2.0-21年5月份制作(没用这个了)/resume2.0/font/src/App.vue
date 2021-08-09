<template>
  <div id="app">
    <home />
    <!-- 背景 -->
    <Background />
  </div>
</template>
<script>
import Home from "@/views/home/Home";
import Background from "@/components/Background.vue";
export default {
  data() {
    return {};
  },
  components: {
    Home,
    Background,
  },
  methods: {},
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
// pc端
@media screen and (min-width: 900px) {
  body,
  html {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 10px;
  }
}
// 移动端
@media screen and (max-width: 900px) {
  body,
  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    padding-top: 0px;
  }
}
body,
html {
  color: #606266;
  font-size: 13px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
