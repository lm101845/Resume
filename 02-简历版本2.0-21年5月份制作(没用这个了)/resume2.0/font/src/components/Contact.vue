<template>
  <div class="container">
    <div class="item" @click="contactByQQ">
      <span>QQ联系</span>
    </div>
    <div class="item" @click="contactByWeChat">
      <span>微信联系</span>
    </div>
    <div class="item" @click="contactByPhone">
      <span>电话联系</span>
    </div>
    <div class="item" @click="contactByMessage">
      <span>短信联系</span>
    </div>
    <div class="item" @click="contactByEmail">
      <span>邮件联系</span>
    </div>
    <div class="item" @click="contactByLeave">
      <span>在线留言</span>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
      };
    },
    computed: {},
    watch: {},
    methods: {
      contactByQQ() {
        try {
          window.location.href =
            "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=1018457683";
        } catch (e) {
        } finally {
          this.$notify({
            type: "warning",
            title: "温馨提示",
            message:
              "如果没有自动打开手机QQ，请检查手机有无安装QQ或者版本版本过低，也可手动添加本人QQ1018457683",
          });
        }
      },
      contactByWeChat() {
        try {
          window.location.href = "wechat://dl/scan";
        } catch (e) {
        } finally {
          this.$notify({
            type: "warning",
            title: "温馨提示",
            message:
              "如果没有自动打开微信，请检查手机有无安装微信或者版本版本过低，也可手动添加本人微信18508814924",
          });
        }
      },
      contactByPhone() {
        try {
          window.location.href = "tel://18508814924";
        } catch (e) {
        } finally {
          this.$notify({
            type: "warning",
            title: "温馨提示",
            message: "如果没有跳转到拨打电话页面，请手动拨打本人电话18508814924",
          });
        }
      },
      contactByMessage() {
        this.$message.info("本功能暂未开通");
      },
      contactByEmail() {
        try {
          window.location.href = "qqmail://1018457683@qq.com";
        } catch (e) {
        } finally {
          this.$notify({
            type: "warning",
            title: "温馨提示",
            danger: "本人邮箱1018457683@qq.com",
          });
        }
      },
      contactByLeave() {
        this.$emit("showDialog")
      },
    },
    created() { },
    mounted() { },
    destroyed() { },
  };
</script>
<style lang='less' scoped>
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .item {
    width: 200px;
    padding: 15px 6px;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #eee;
  }
  .item:last-of-type {
    border: none;
  }
</style>