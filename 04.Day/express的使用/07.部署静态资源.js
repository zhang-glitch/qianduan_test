const express = require('express');
const path = require("path")
const app = express();

app.use(express.static(path.resolve(__dirname, "static")));

app.listen(8000, () => {
  console.log("路由服务器启动成功~");
});
