const Koa = require("koa");

const usersRouter = require("./router/users")

const app = new Koa();


app.use(usersRouter.routes())


app.listen(3000, () => {
  console.log("服务器启动成功")
})