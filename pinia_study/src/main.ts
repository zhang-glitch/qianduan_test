import { createApp } from 'vue'
import App from './App.vue'
// import App from './setup函数测试/App.vue'
// import App from './父子组件生命周期的执行顺序/App.vue'
import { createPinia } from 'pinia'
import plugin from './plugin.js'
import router from './router/index'
// import TestComputedVue from './测试computed的缺点/TestComputed.vue'

// 测试el-upload组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import UploadFileVue from './文件上传/UploadFile.vue'
import DragTest from './自定义拖拽布局/DragTest.vue'

console.log('环境变量-===================', import.meta, import.meta.env)
// const app = createApp(App)
// const app = createApp(UploadFileVue)
const app = createApp(DragTest)
app.use(createPinia()).use(router).use(plugin).use(ElementPlus).mount('#app')
