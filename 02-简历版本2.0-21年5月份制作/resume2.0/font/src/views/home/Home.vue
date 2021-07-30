<template>
  <div class="container">
    <!-- nav区域 -->
    <el-row class="nav">
      <span class="contact" @click="drawer = true">| | |</span>
      <el-col :span="19" style="margin-top: 50px">
        <el-row>
          <div class="header">李明个人简历</div>
        </el-row>
        <el-breadcrumb separator="|">
          <el-breadcrumb-item><span class="text-white">前端工程师</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="text-white">程序猿</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="text-white">1.5年经验</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="text-white">JavaScript</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="text-white">27岁</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="text-white">男</span></el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="5">
        <el-image class="ava" src="./avatar.png" fit="cover"></el-image>
      </el-col>
    </el-row>
    <!-- 移动端 -->
    <ContentMobile v-if="isMobile" />
    <!-- pc端 -->
    <ContentPc v-else />
    <!-- 测栏 -->
    <!--<div class="aside" v-if="!isMobile">
      <div>点赞</div>
      <div>联系</div>
    </div>-->
    <!-- 抽屉 -->
    <div v-if="isMobile">
      <el-drawer size="70%" :visible.sync="drawer" direction="ltr" :before-close="handleClose">
        <template slot="title">
          <div>
            <i class="header-icon el-icon-info"></i>
            联系我吧
          </div>
        </template>
        <Contact @showDialog="showDialog" />
      </el-drawer>
    </div>
    <!-- 联系对话框 -->
    <el-dialog title="在线留言" :visible.sync="dialogVisible" width="90%" :append-to-body="true" :before-close="handleClose">
      <div>
        <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="80px">
          <el-form-item prop="name" label="游客昵称">
            <el-input v-model="form.name" placeholder="请输入您的昵称"></el-input>
          </el-form-item>
          <el-form-item prop="contact" label="联系方式">
            <el-input v-model="form.contact" placeholder="请输入您的联系方式"></el-input>
          </el-form-item>
          <el-form-item prop="company" label="所在公司">
            <el-input v-model="form.company" placeholder="请输入您的所在公司（选填）"></el-input>
          </el-form-item>
          <el-form-item prop="comment" label="留言内容">
            <el-input type="textarea" placeholder="本人将及时通过所留联系方式回复您" v-model="form.comment"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button :icon="isSending ? 'el-icon-loading' : ''" type="primary" @click="submitcomment">发 送</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import ContentMobile from "@/components/ContentMobile.vue";
  import ContentPc from "@/components/ContentPc.vue";
  import Contact from "@/components/Contact.vue";
  export default {
    components: {},
    data() {
      return {
        isSending: false,
        form: {
          name: "",
          contact: "",
          company: "",
          comment: "",
        },
        rules: {
          name: [{ required: true, message: "请输入游客昵称", trigger: "blur" }],
          contact: [
            { required: true, message: "请输入联系方式", trigger: "blur" },
          ],
          comment: [
            { required: true, message: "请输入留言内容", trigger: "blur" },
          ],
        },
        dialogVisible: false,
        drawer: false,
        direction: "rtl",
        isMobile: false,
        activeNames: ["1"],
      };
    },
    components: {
      ContentMobile,
      ContentPc,
      Contact,
    },
    computed: {},
    watch: {},
    methods: {
      submitcomment() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid && !this.isSending) {
            this.isSending = true;
            try {
              let { data: res } = await this.$http.post(
                "http://192.168.1.7:3000",
                this.form
              );
              if (res.status === 200) {
                this.$notify.success(res.message);
                this.dialogVisible = false;
                this.$refs.ruleForm.resetFields();
              } else {
                this.$notify.error(res.message);
              }
            } catch {
              this.$notify.error("服务器异常");
            } finally {
              this.isSending = false;
            }
          }
        });
      },
      showDialog() {
        this.drawer = false;
        this.dialogVisible = true;
      },
      handleChange(val) {
        console.log(val);
      },
      handleClose(done) {
        done();
      },
    },
    onLoad() { },
    created() {
      if (document.documentElement.clientWidth < 1280) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
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
    mounted() { },
    destroyed() { },
  };
</script>
<style lang="less">
  // pc端
  @media screen and (min-width: 900px) {
    .container {
      position: relative;
      background: #fff;
      height: 100vh;
      margin: 0 auto;
      width: 960px;
      border-radius: 8px;
    }
    .nav {
      border-radius: 8px 8px 0 0;
    }
    .ava {
      background: #fff;
      width: 180px;
      height: 200px;
    }
    .contact {
      display: none;
    }
  }
  // 移动端
  @media screen and (max-width: 900px) {
    .container {
      height: 100vh;
      width: 100vw;
      background: #fff;
      box-sizing: border-box;
      overflow-x: hidden;
    }
    .ava {
      background: #fff;
      width: 90px;
      height: 100px;
      position: relative;
      top: 50px;
      right: 15px;
    }
    .contact {
      display: block;
      transform: rotate(-90deg) scaley(1.5);
      display: inline-block;
      position: absolute;
      top: 12px;
      left: 10px;
    }
  }
  .aside {
    position: absolute;
    width: 100px;
    height: 200px;
    background: red;
    top: 39vh;
    right: -125px;
  }
  .row {
    position: relative;
    padding: 20px;
  }
  .row::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 34px;
    background: #ddd;
  }
  .nav {
    height: 240px;
    color: #fff;
    padding: 30px 20px 5px 20px;
    background: #0c8aae;
  }
  .collapose-name {
    padding-left: 20px;
  }
  .text-white {
    color: #fff;
    line-height: 20px;
  }
  .header {
    margin: 20px 0;
    font-size: 23px;
  }
  .header-color {
    color: #0c8aae;
    font-size: 20px;
    font-weight: bold;
  }
</style>
