const bar = require("./foo.js")

setTimeout(() => {
  console.log("导入的文件age", bar.age)
}, 2000)


setTimeout(() => {
  bar.obj.name = "zh"
}, 1000)
