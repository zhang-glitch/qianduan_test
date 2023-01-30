import Express, { Request, Response, NextFunction, Router } from 'express'

import cookieSession from 'cookie-session'
const app = Express()

const router = Router()

router.get('/', (req: Request, res: Response) => {
  if (req.session) {
    req.session.islogin = ''
  }
})

// 当我们扩展中间件时，添加的类型并不能改变
app.use((req: Request, res: Response, next: NextFunction) => {
  req.name = 'pp'
})
