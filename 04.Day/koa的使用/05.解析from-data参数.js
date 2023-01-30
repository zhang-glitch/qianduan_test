const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();
const uploadRouter = new Router({prefix: '/upload'});

const upload = multer();

uploadRouter.post('/', upload.any(), (ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = "解析成功~";
});

app.use(uploadRouter.routes());

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
