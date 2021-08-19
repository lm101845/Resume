<template>
  <div>
    <!-- 移动端背景 -->
    <img class="backContainer" v-if="isMobile" src="../assets/p4.jpg" />
    <!-- pc端背景 -->
    <div>
      <img class="backContainer pc_back" src="../assets/p1.jpg" />
      <img class="backContainer pc_back" src="../assets/p2.jpg" />
      <img class="backContainer pc_back" src="../assets/p3.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    if (window.screen.width < 1380) {
      this.isMobile = true;
    }
    // 监听屏幕变化
    window.onresize = (e) => {
      if (document.documentElement.clientWidth > 1280) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    };
  },
  mounted() {},
  destroyed() {},
};
</script>
<style lang="less" scoped>
.backContainer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  display: block;
}
.pc_back:nth-of-type(1) {
  animation: loopFade 12s infinite ease;
  animation-delay: -4s;
}
.pc_back:nth-of-type(2) {
  animation: loopFade 12s infinite ease;
  animation-delay: -8s;
}
.pc_back:nth-of-type(3) {
  animation: loopFade 12s infinite ease;
  animation-delay: -12s;
}

@keyframes loopFade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
