/*
 * @Author: liming
 * @Date: 2021-09-09 06:54:10
 * @LastEditTime: 2021-09-09 09:46:32
 * @FilePath: \01-项目部署实战\02-代码手敲\vue_webhook\webhook.js
 */
let http = require('http')

let server = http.createServer(function (req, res) {
    if (req.method == 'POST' && req.url == '/webhook') {
        res.setHeader('Content-Type', 'application/json')
        // 我给GitHub服务器发送一个回应,告诉服务器我这边已经成功了
        res.end(JSON.stringify({OK: true}))
    } else {
        res.end('Not Found')
    }
})

server.listen(4000, () => {
    console.log('webhook服务已经在4000端口上启动');
})