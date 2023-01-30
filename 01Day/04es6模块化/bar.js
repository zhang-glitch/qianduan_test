import * as bar from './foo.js'

console.log("bar执行")
console.log(bar.name)
// setTimeout(() => {
//   bar.name = "pppp" //这里是不能修改导入的普通类型的变量的。因为在js内部，他自己通过const重新声明这个变量，做到实时绑定。
// }, 1000)


setTimeout(() => {
  bar.obj.name = "pppp" //但是可以修改导入的普通类型的变量的。
}, 1000)



setTimeout(() => {
  console.log("导出文件改变后的值", bar.name)// qqqq
}, 2000)

console.log("name=====", bar.name)
console.log("obj.name======", bar.obj.name)