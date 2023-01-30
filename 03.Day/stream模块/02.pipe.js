const fs = require('fs');


const reader = fs.createReadStream("./zh.txt");
const writer = fs.createWriteStream("./llm.txt");


// pipe管道会自动关闭。不需要我们手动调用close事件。
reader.pipe(writer)

writer.on("close", () => {
  console.log("文件将要关闭")
})