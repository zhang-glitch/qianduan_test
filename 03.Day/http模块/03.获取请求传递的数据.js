const http = require("http");
const url = require("url")
const queryString = require("querystring")


http.createServer((req, res) => {
  let dataBody = ""
  // 获取query参数
  // console.log(queryString.parse(url.parse(req.url).query))
  req.setEncoding("utf-8")
  req.on("data", (data) => {
    dataBody += data;
  })
  req.on("close", () => {
    // 当文件关闭之前，解析参数
    const requestData = JSON.parse(dataBody)
    console.log(dataBody)
    console.log(requestData)
  })
  res.setHeader("content-type", "application/json;charset=utf-8")
  res.end("返回")

  // res.end("返回数据")
}).listen(3030, () => {
  console.log("服务器启动在3030端口")
})
