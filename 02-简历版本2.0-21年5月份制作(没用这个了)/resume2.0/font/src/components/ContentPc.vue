<template>
  <div>
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">求职意向</el-col>
      <el-col :span="17">
          <div class="collapose-item">
              <div>
                  <span class="text-sm text-color-shaw">求职岗位： </span>
                  <span class="text-primary">web前端工程师：</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">工作地点： </span>
                  <span class="text-primary">北京</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">期望薪资： </span>
                  <span class="text-primary">12k</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">到岗时间： </span>
                  <span class="text-primary">3天内到岗</span>
              </div>
          </div>

      </el-col>
    </el-row>
    <!-- 教育背景 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">教育背景</el-col>
      <el-col :span="17">
          <div class="collapose-item">
              <div>
                  <span class="text-sm text-color-shaw">所属学历： </span>
                  <span class="text-primary">本科</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">毕业院校： </span>
                  <span class="text-primary">铜陵学院</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">学制： </span>
                  <span class="text-primary">全日制</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">院系： </span>
                  <span class="text-primary">金融学院</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">专业： </span>
                  <span class="text-primary">金融学</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">就读时间： </span>
                  <span class="text-primary">2013-09</span>
              </div>
              <div>
                  <span class="text-sm text-color-shaw">毕业时间： </span>
                  <span class="text-primary">2017-06</span>
              </div>
          </div>

      </el-col>
    </el-row>
    <!-- 工作经历 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">工作经历</el-col>
      <el-col :span="17">
          <div class="collapose-item">
              <div class="space">
                  <div class="float-left">2021.03 -- 2021.04</div>
                  <div class="float-right text-bold">北京斑岚科技有限公司</div>
                  <div style="clear: both">
                      <div>
                          <span class="text-color-shaw text-sm">工作岗位： </span>
                          <span class="">前端</span>
                      </div>
                      <div>
                          <span class="text-color-shaw text-sm">工作性质： </span>
                          <span class="">全职</span>
                      </div>
                      <div>
                          <span class="text-color-shaw text-sm">工作描述： </span>
                          <span class="">负责公司官网及展览项目的UI优化</span>
                      </div>
                  </div>
              </div>
          </div>

      </el-col>
    </el-row>
    <!-- 项目经验 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">项目经验</el-col>
      <el-col :span="17">
          <div class="collapose-item">
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>自动贩卖机后台管理系统</span>
                  </div>
                  <div>
                      <div>
                          <span class="text-sm text-color-shaw">应用描述：</span>
                          <br />
                          <span>该系统为公司的自动售货机提供服务，可查看各台售货机机况，包括运行指标，设备订单等；进行远程操控，包括出货，锁机等；可发布商品铺设订单，让员工根据订单进行设备补货；具备订单管理模块、权限分配模块、设备远程管理模块、可视化统计等</span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">使用技术：</span>
                          <br />
                          <span>Vue、ElementUI、VueCli、vue-router、vuex、axios等</span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">应用展示：</span>
                          <a href="#" @click="openWindow('https://www.shenacg.cn/pic/mt')">点击前往</a>
                      </div>
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>仿蘑菇街商城</span>
                  </div>
                  <div>
                      <div>
                          <span class="text-sm text-color-shaw">应用描述：</span>
                          <br />
                          <span>
                              基于Vue开发的H5移动端SPA商城应用，具备商品展示、商品分类、购物车等模块，使用防抖节流等技术对应用进行优化
                          </span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">使用技术：</span>
                          <br />
                          <span>Vue、VueCli、vue-router、vuex、axios、better-scroll等</span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">应用展示：</span>
                          <a href="#"
                             @click="
                  openWindow(
                    'http://101.201.146.183:3000/res/supermall/dist/index.html#/home'
                  )
                ">点击前往</a>
                      </div>
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>仿蘑菇街小程序</span>
                  </div>
                  <div>
                      <div>
                          <span class="text-sm text-color-shaw">应用描述：</span>
                          <br />
                          <span>该应用是基于uniapp+u-view混合式开发的微信小程序，为合作酒店提供产品及平台的便捷管理。应用实现了动态权限、数据统计、房间信息查询及修改等功能</span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">使用技术：</span>
                          <br />
                          <span>微信小程序、Vuex、axios、WEUI、uniapp、u-view、HbuilderX等</span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">应用展示：</span>
                          <a href="#" @click="openWindow()">点击前往</a>
                      </div>
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <span>电商后台管理系统</span>
                  </div>
                  <div>
                      <div>
                          <span class="text-sm text-color-shaw">应用描述：</span>
                          <br />
                          <span>
                              该应用为电商商城提供后台管理服务。实现了动态路由、权限分配、角色管理等功能模块，管理人员可在系统上对员工或者角色进行信息修改、商品修改、平台数据统计等功能
                          </span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">使用技术：</span>
                          <br />
                          <span>Vue全家桶、ElementUI、Promise、axios等</span>
                      </div>
                      <div>
                          <span class="text-sm text-color-shaw">应用展示：</span>
                          <a href="#" @click="openWindow()">点击前往</a>
                      </div>
                  </div>
              </el-card>
          </div>

      </el-col>
    </el-row>
    <!-- 技能特长 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">技能特长</el-col>
      <el-col :span="17">
          <div class="collapose-item">
              <div class="margin-bottom-sm">
                  <span class="text-sm">Javascript</span>
                  <el-progress :percentage="count.jsCount"
                               color="#fcd400"
                               status="success"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span>Vue</span>
                  <el-progress :percentage="count.vueCount"
                               status="success"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span class="text-sm">React</span>
                  <el-progress :percentage="count.reactCount"
                               color="#61dafb"
                               status="success"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span class="text-sm">Uniapp</span>
                  <el-progress :percentage="count.vueCount"
                               status="success"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span class="text-sm">微信小程序</span>
                  <el-progress :percentage="count.mpCount"
                               color="#00c74"
                               status="success"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span class="text-sm">JQuery</span>
                  <el-progress :percentage="count.jqCount"
                               color="#0066ad"
                               status="success"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span class="text-sm">Node</span>
                  <el-progress :percentage="count.nodeCount"
                               color="#333"
                               status="warning"></el-progress>
              </div>
              <div class="margin-bottom-sm">
                  <span class="text-sm">MySql</span>
                  <el-progress :percentage="count.mysqlCount"
                               color="#7fafb7"
                               status="exception"></el-progress>
              </div>
          </div>

      </el-col>
    </el-row>
    <!-- 自我评价 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">自我评价</el-col>
      <el-col :span="17">
          <div class="collapose-item">
              <el-timeline>
                  <el-timeline-item hide-timestamp timestamp="2018/4/2" placement="top">
                      <el-card>
                          <h4>1.技术齐全</h4>
                          <p>
                              熟悉AJAX、Axios等异步工具库；能编写增删改查等SQL语句；具备Node基本使用能力；熟悉Vue及其全家桶包括但不限于vuex、vue-router、vue-cli；熟悉uniapp混合式开发;熟悉微信小程序开发；熟悉react及hook
                          </p>
                      </el-card>
                  </el-timeline-item>
                  <el-timeline-item hide-timestamp timestamp="2018/4/2" placement="top">
                      <el-card>
                          <h4>2.熟悉常见框架</h4>
                          <p>
                              熟悉不同技术栈中的热门框架，包括但不限于Element-UI、Ant、ColorUi、U-View、bootstrap
                          </p>
                      </el-card>
                  </el-timeline-item>
                  <el-timeline-item hide-timestamp
                                    timestamp="2018/4/12"
                                    placement="top">
                      <el-card>
                          <h4>3.熟悉JS类库源码</h4>
                          <p>
                              能够使用javascript原生语句写实现Promise/Axios/Ajax/MVVM；熟悉观察者发布订阅模式
                          </p>
                      </el-card>
                  </el-timeline-item>
                  <el-timeline-item hide-timestamp
                                    timestamp="2018/4/12"
                                    placement="top">
                      <el-card>
                          <h4>4.样式还原</h4>
                          <p>
                              能根据设计图纸/UI设计，使用HTML以及CSS/CSS3等技术精准还原页面
                          </p>
                      </el-card>
                  </el-timeline-item>
                  <el-timeline-item hide-timestamp timestamp="2018/4/3" placement="top">
                      <el-card>
                          <h4>5.高效合作</h4>
                          <p>知晓restful风格、前后端分离开发模式、能根据业务联调API接口</p>
                      </el-card>
                  </el-timeline-item>
                  <el-timeline-item hide-timestamp timestamp="2018/4/2" placement="top">
                      <el-card>
                          <h4>6.灵活开发</h4>
                          <p>
                              针对不同业务需求场景，能够选择合适的技术栈/库/框架进行快速学习并投入生产，提高效率
                          </p>
                      </el-card>
                  </el-timeline-item>
                  <el-timeline-item hide-timestamp timestamp="2018/4/2" placement="top">
                      <el-card>
                          <h4>7.热爱热情</h4>
                          <p>对代码编写具有浓烈兴趣和热情，热爱学习、热爱生活</p>
                      </el-card>
                  </el-timeline-item>
              </el-timeline>
          </div>

      </el-col>
    </el-row>
    <!-- 荣誉证书 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">荣誉证书</el-col>
      <el-col :span="17">英语六级</el-col>
    </el-row>
    <!-- 兴趣爱好 -->
    <el-row class="row" :gutter="10">
      <el-col :span="7" class="header-color">兴趣爱好</el-col>
      <el-col :span="17">代码、运动、电影、游戏、撸猫</el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                count: {},
                activeNames: [],
                format(percentage) {
                    return percentage === 100 ? "满" : `${percentage}%`;
                },
            };
        },

    };
</script>

<style>
 
</style>