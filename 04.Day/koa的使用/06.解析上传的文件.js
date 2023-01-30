const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();
const uploadRouter = new Router({prefix: '/upload'});

const uploadSingle = multer({
  dest: './uploads/avatar'
});

const uploadArray = multer({
  dest: './uploads/picture'
});

// 上传单个文件，而且他只能上传单文件。
uploadRouter.post('/avatar', uploadSingle.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = "上传头像成功~";
});

// 上传多个文件
uploadRouter.post('/picture', uploadArray.array('picture'), (ctx, next) => {
  console.log(ctx.req.files);
  ctx.response.body = "上传多文件成功~";
});

app.use(uploadRouter.routes());

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
