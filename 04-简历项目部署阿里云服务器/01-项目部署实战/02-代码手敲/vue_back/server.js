/*
 * @Author: liming
 * @Date: 2021-09-08 23:29:59
 * @LastEditTime: 2021-09-09 00:52:43
 * @FilePath: \01-项目部署实战\02-代码手敲\vue_back\server.js
 */

let http = require('http')

let users = [
    { id: '001', name: 'zhangsan' },
    { id: '002', name: 'lisi' },
    { id: '003', name: 'wangwu' },
]
// 这里老师没有用express等Web框架，用原生来写的，我为了不找事，也就按老师写的来吧。
let server = http.createServer(function (req, res) {
    //服务器端解决跨域：给服务器一个响应头
    res.setHeader('Access-Control-Allow-Origin','*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
        // 对象————>JSON字符串
        // JSON.stringify 方法接收一个变量，并将它转换成 JSON 表示形式。
    } else {
        res.end('Not Found')
    }
})

server.listen(3000, () => {
    console.log('后端API接口服务器已经启动在3000端口上了');
})