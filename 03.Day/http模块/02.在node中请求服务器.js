const http = require("http");

http.get("http://localhost:8080", (res) => {
  res.on("data", (data) => {
    console.log("get请求", data.toString())
  })
})



http.request({
  method: 'post',
  host: 'localhost',
  port: 8080
}, (res) => {
  res.on("data", (data) => {
    console.log("post请求", data.toString())
  })
}).end()
