const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  // dest: './uploads/'
  storage
});

// const upload = multer({
//   dest: './uploads/'
// });

app.post('/login', upload.any(), (req, res, next) => {
  console.log("非文件的格式", req.body);
  res.end("用户登录成功~")
});

app.post('/uploadmore', upload.array('file'), (req, res, next) => {
  console.log("上传多个文件", req.files);
  res.end("文件上传成功~");
});
app.post('/uploadsingle', upload.single('file'), (req, res, next) => {
  console.log("上传单个文件", req.file);
  res.end("文件上传成功~");
});

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功~")
});
