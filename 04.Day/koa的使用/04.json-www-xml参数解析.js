const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const Router = require('koa-router');

const app = new Koa();

const upload = multer();

app.use(bodyParser());
app.use(upload.any());

app.use((ctx, next) => {
  // console.log("body===json", ctx.request.body);
  console.log("body===form-data", ctx.req.body);
  ctx.response.body = "Hello World";
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
