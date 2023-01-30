const express = require("express");
const multer = require("multer")()

const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

// 如果为true，表示它将采取第三方的qs库解析请求的body
// 如果是false,表示他将采取node的querystring模块解析请求的body
// {
//   extended: true
// }

app.use(multer.any())


app.post("/login", (req, res, next) => {
  console.log("login-body", req.body)
  // 注意end方法只能返回字符串类型或者是buffer类型
  res.end(JSON.stringify(req.body))
  next()
})

app.post("/register", (req, res, next) => {
  console.log("register-body", req.body)
  res.end(JSON.stringify(req.body))
  next()
})

app.get("/form", (req, res, next) => {
  console.log("form", req.body)
  res.end(JSON.stringify(req.body))
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})