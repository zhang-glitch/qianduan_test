const fs = require("fs");


fs.writeFile("./01.hello.txt", "加入文件", { encoding: 'utf-8', flag: 'a+' }, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})