// const Koa = require('koa');

// const app = new Koa();


// // 未使用路由的时候，不会解析，他不知道怎么去解析。因为未给出params的键名。但是会解析query.
// app.use((ctx, next) => {
//   console.log(ctx.request.url); // 
//   console.log(ctx.request.query); // {}
//   console.log(ctx.request.params); // undefined
//   ctx.response.body = "Hello World";
// });


// app.listen(8000, () => {
//   console.log("参数处理服务器启动成功~");
// });

// const Koa = require('koa');

const app = new Koa();
const Router = require('koa-router');

const userRouter = new Router({ prefix: '/users' });

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.url);
  console.log(ctx.request.params);
  console.log(ctx.request.query);
})

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log("参数处理服务器启动成功~");
});
