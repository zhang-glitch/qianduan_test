const Router = require("koa-router");


const usersRouter = new Router({
  prefix: '/users'
})


// 获取动态参数
usersRouter.get("/:id", (ctx, next) => {
  console.log("query", ctx.request.query)
  console.log("params", ctx.request.params)
  ctx.response.body = "get请求结果"
})

usersRouter.post("/", (ctx, next) => {
  console.log("query", ctx.request.query)
  console.log("params", ctx.request.params)
  ctx.response.body = "post请求结果"
})
module.exports = usersRouter