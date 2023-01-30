
let age = 'ppp';
const obj = {
  name: 'llm'
}

setTimeout(() => {
  age = 10000;
}, 1000)


setTimeout(() => {
  console.log("导出文件obj.name", obj.name)
}, 2000)

exports.age = age;
exports.obj = obj;

console.log(arguments.callee + "")