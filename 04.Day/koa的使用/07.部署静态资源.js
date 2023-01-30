const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require("path")
const app = new Koa();

app.use(koaStatic(path.resolve(__dirname, "./static")));

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
