/*
 * @Author: liming
 * @Date: 2021-09-09 06:54:10
 * @LastEditTime: 2021-09-09 23:55:37
 * @FilePath: \01-项目部署实战\02-代码手敲\vue_webhook\webhook.js
 */
let http = require('http')

let crypto = require('crypto')
let SECRET = '123456'
// 这个密钥就是github上我们在webhook上声明的123456

function sign(body) {
    return `sha1=` + crypto.createHmac('sha1', SECRET).update(body).digest('hex')
    // 这个是加密算法
}

let server = http.createServer(function (req, res) {
    if (req.method == 'POST' && req.url == '/webhook') {
        res.setHeader('Content-Type', 'application/json')
        // 我给GitHub服务器发送一个回应,告诉服务器我这边已经成功了

        let buffers = []
        // 我们来分次接收客户端发过来的请求体
        req.on('data', function (buffer) {
            buffers.push(buffer)
        })

        req.on('end', function (buffer) {
            let body = Buffer.concat(buffers)
            let event = req.headers['x-github-event']  //event=push
            //github请求过来的时候，要传递请求体body,另外还会传递一个签名(signature)过来，你需要验证签名对不对
            let signature = req.headers['x-hub-signature']
            if (signature !== sign(body)) {
                // 如果签名不一样，则属于非法请求
               return  res.end('Not Alowed')
            }
        })
        res.end(JSON.stringify({OK: true}))
    } else {
        res.end('Not Found')
    }
})

server.listen(4000, () => {
    console.log('webhook服务已经在4000端口上启动');
})