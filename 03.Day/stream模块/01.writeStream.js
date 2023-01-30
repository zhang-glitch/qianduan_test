const fs = require("fs");

const writeStream = fs.createWriteStream("./zh.txt", {
  flags: 'r+',
  encoding: 'utf-8',
  start: 3
})

// 写入时会覆盖原来位置的文字。
writeStream.write("哦", (err) => {
  console.log(err)
})

writeStream.end("文件写入的内容")

writeStream.on("open", () => {
  console.log("文件即将写入")
})

// writeStream.close()

writeStream.on("close", () => {
  console.log("文件关闭")
})