const path = require("path");
const express = require("express");
const port = 3000;
const { promisify } = require("util");
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const app = express();

// 邮件发送模块
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '1974569976@qq.com',
    pass: 'syzsltfvpfoleicf' //授权码,通过QQ获取

  }
});

// mysql模块
const connection = mysql.createConnection({
  host: '101.201.146.183',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'resume'
});
const sqlPromise = (sql, param) => {
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(sql, param, function (err, result) {
      if (err) {
        console.log(err.message)
        reject('[INSERT ERROR] - ', err.message)
        return;
      } else {
        resolve("[Success] -", result)
      }
    });
  })
}

// 获取一个对象下所有的key，并以字符床形式返回
const getKeys = (obj) => {
  return Object.keys(obj).join(",").replace(/\,$/, "")
}

// 获取一个对乡下所有的value，并以字符床形式返回
const getVal = (obj) => {
  let str = "";
  for (let key in obj) {
    str += obj[key] + ","
  }
  return str.replace(/\,$/, "")
}

// 请求实例
app.use(bodyParser());
app.use('/res', express.static(__dirname + "/src"));
// 允许跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});
// 部署资源
app.get('/', function (req, res) {
  res.send('hello world');
});

// 添加留言
app.post("/resume/comment", async (req, res) => {
  let body = req.body;
  try {
    console.log(req.body, "请求体", "hashuhiu");
    let sql = `
      INSERT INTO client(name,contact,company,comment) 
      VALUES('${body.name}','${body.contact}','${body.company}','${body.comment}')
    `;
    let sqlRes = await sqlPromise(sql);
    // 发送邮件
    var mailOptions = {
      from: '1974569976@qq.com', // 发送者
      to: 'azzzzqq.com@qq.com', // 接受者,可以同时发送多个,以逗号隔开
      subject:  `来自${body.name}的留言`, // 标题
      //text: 'Hello world', // 文本
      html: `
        <h4>访客昵称: <h3>${body.name}</h3></h4>
        <h4>所在公司：<h3>${body.company||'未知'}</h3><h4>
        <h4>联系方式：<h3>${body.contact}</h3><h4>
        <h4>留言内容：<h3>${body.comment}</h3><h4>
      `
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err, "发送失败");
        return;
      }
      console.log('发送成功');
    });
    res.send({
      status: 200,
      message: "留言成功！请耐心等待回复"
    })
  } catch (e) {
    res.send({
      status: 500,
      message: "留言失败"
    })
  }
})

app.listen(port);