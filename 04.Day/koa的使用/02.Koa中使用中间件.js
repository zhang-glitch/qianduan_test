const Koa = require('koa');

const app = new Koa();

// koa中只有use普通中间件。这个中间件报错
// app.use("/login", (ctx, next) => {
//   ctx.response.body = "Hello World";
// });
app.use((ctx, next) => {
  ctx.response.body = "Hello login";
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});