// plugin.js
// 对象类型
export default {
  install(app) {
    app.config.globalProperties.$name = 'zh'
  }
}

// 函数类型
// export default function(app) {
//   console.log(app);
// }
