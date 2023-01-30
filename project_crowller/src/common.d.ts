// 类型融合，这里他会和内置的.d.ts文件融合合并。

declare namespace Express {
  interface Request {
    name: string
  }
}
