<script setup>
import { ref } from 'vue'
import axios from 'axios'
const imageUrl = ref('')
// const handleSuccess = (response, file) => {
//   imageUrl.value = URL.createObjectURL(file.raw)
// }

// 自定义上传
const handleRequest = (e) => {
  // base64格式的图片路径
  const fd = new FileReader()
  fd.readAsDataURL(e.file)
  // 获取图片路径
  // imageUrl.value = URL.createObjectURL(e.file) // 这是转化为blob格式
  // 将文件转化为base64格式传入后端
  fd.onload = () => {
    axios
      .post('http://127.0.0.1:8080/upload', {
        imgUrl: fd.result
      })
      .then((res) => {
        imageUrl.value = res.data.data
      })
  }
  // 上传blob格式
  // console.log('e', e) // 根据e.file.size来控制图片上传的大小。
  // axios
  //   .post('http://127.0.0.1:8080/upload', {
  //     imgUrl: URL.createObjectURL(e.file)
  //   })
  //   .then((res) => {
  //     console.log(res)
  //     imageUrl.value = res.data.data
  //   })
}
</script>

<template>
  <el-upload
    action="http://127.0.0.1:8080/upload"
    :http-request="handleRequest"
    :show-file-list="false"
    :on-success="handleSuccess"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <div v-else>
      <i class="el-icon-plus avatar-uploader-icon"></i>
      <div class="el-upload__text">点击上传封面</div>
    </div>
    <template #tip>
      <div v-if="!imageUrl" class="el-upload__tip">
        只能上传 jpg/png 文件，且不超过 500kb
      </div>
    </template>
  </el-upload>
</template>
