const express = require('express')

const app = express()
const multer = require('multer')
// const upload = multer()
app.use(express.json())
// 将它作为全局中间件时，它将会产生冲突，不能正确的解析文件上传。所以不要将他作为全局中间件使用
// app.use(upload.any())// 然后他就会将form表单非文件的数据解析成对象，绑定到req.body上

// // 路径匹配的中间件
// app.use('/upload', upload.any(), (req, res, next) => {
//   console.log('================')
//   res.set('access-control-allow-origin', '*')
//   res.set('Access-Control-Allow-Headers', 'content-type')
//   // // console.log('index middleware 01', req.body)
//   // let body = ''
//   // req.on('data', (data) => {
//   //   body += data
//   //   // fileWriter.write(data);
//   // })

//   // req.on('end', () => {
//   //   console.log(body) // 输出一大堆东西
//   //   console.log('文件上传成功~')
//   //   res.end('文件上传成功~')
//   // })

// })

// 只提供文件上传的输出位置，文件名随机。
const upload = multer({
  dest: './uploads/'
})

// 上传多个文件。注意文件上传的name都必须为file
app.post('/upload', upload.array('file'), (req, res, next) => {
  res.set('content-type', 'text/plain; charset=utf-8')
  console.log(req.files)
  res.end('文件上传成功~')
})
app.listen(8080, () => {
  console.log('启动成功')
})
