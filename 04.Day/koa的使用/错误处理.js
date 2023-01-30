const Koa = require("koa");

const KoaRouter = require('koa-router');


const app = new Koa();

const router = new KoaRouter({
  prefix: '/err'
})


router.get("/", (ctx, next) => {
  ctx.app.emit("fail", new Error("请求出错"), ctx)
})


app.on("fail", (errMessage, ctx) => {
  ctx.body = {
    status: 500,
    message: errMessage.message
  }
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("项目启动在3000端口")
})