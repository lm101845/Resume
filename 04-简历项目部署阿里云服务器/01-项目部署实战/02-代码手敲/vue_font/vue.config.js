/*
 * @Author: liming
 * @Date: 2021-09-09 08:41:15
 * @LastEditTime: 2021-09-09 08:41:16
 * @FilePath: \04-简历项目部署阿里云服务器\01-项目部署实战\02-代码手敲\vue_font\vue.config.js
 */

//  这个主要为了解决Invalid Host header的问题
// vue-cli配置域名访问报错：Invalid Host header（无效的主机头）
// https://blog.csdn.net/qq_40678503/article/details/109206981
module.exports = {
    productionSourceMap: false,
    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        disableHostCheck: true,
    }
};

