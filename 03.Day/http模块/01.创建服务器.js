
const http = require("http");



// 方式一
const server = new http.Server((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset:ASCII'
  })

  res.end("<h1>我是一个汉字，当编码格式是ascii时，看其乱不乱码</h1>")//会乱码。需要设置charset:utf-8格式。
})


server.listen(8080, () => {
  console.log("服务器创建成功")
})


// 方式二
http.createServer((req, res) => {
  // 指定body中数据的形式
  // req.setEncoding("utf-8")
  req.setEncoding("binary")
  req.on("data", (data) => {
    console.log("data", typeof data) //string
    res.end(data)
  })

  // res.end("返回数据")
}).listen(3030, () => {
  console.log("服务器启动在3030端口")
})