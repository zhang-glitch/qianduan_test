const fs = require("fs");

const read = fs.createReadStream("./zh.txt", {
  // 位置是从0开始的
  start: 3,
  end: 8,
  highWaterMark: 2, //文件一次性读取多少字节。默认64kb
  encoding: 'utf-8'
})

// 可以通过pause(),resume()方法对文件读取进行暂停和恢复。
read.on("data", (data) => {
  console.log(data)
})
read.on("open", () => {
  console.log("文件打开")
})
read.on("close", () => {
  console.log("文件关闭")
})

read.on("end", () => {
  console.log("文件读取完毕")
})