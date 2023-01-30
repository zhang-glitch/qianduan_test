const fs = require("fs");

fs.stat("./01.hello.txt", (err, info) => {
  console.log(info)
  console.log(info.isFile())// 判断他是否为文件
  console.log(info.isDirectory())// 判断他是否为文件夹
})