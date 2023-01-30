const fs = require("fs");

fs.open("./01.hello.txt", (err, fd) => {
  if (err) {
    console.log(err)
  } else {
    // console.log(fd) // fd是一个数字。
    fs.promise.readFile(fd).then(res => {

      console.log(res)
    })
  }
})

