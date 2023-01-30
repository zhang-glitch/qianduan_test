// 浅拷贝，两种解释，一种是对象的引用赋值。这一种是一层都没有拷贝。二种是使用Object.assign()方法对对象拷贝，他只拷贝的一层对象，其他的还是对象的引用。


// const newObj = {}
// function deepClone (obj) {
//   if (obj === null && typeof obj !== 'object') return obj

//   for (let key in obj) {
//     // 如果是基本数据类型直接赋值,判断是否是函数类型，如果是则直接赋值
//     if (typeof obj[key] !== 'object') {
//       // newObj[key] = obj[key]
//       // 如果是引用数据类型，递归调用函数
//       if (Array.isArray(obj[key])) {// 如果是数据类型时
//         newObj[key] = []
//       } else {
//         newObj[key] = {}
//       }
//       deepClone(obj[key])
//       // 如果是对象类型时
//     } else {
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj
// }


function deepClone (origin, target = {}) {
  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      if (origin[key] !== null && typeof origin[key] === 'object') {
        if (Array.isArray(origin[key])) {
          // 处理数组
          target[key] = []
        } else {
          // 处理对象
          target[key] = {}
        }
        deepClone(origin[key], target[key])
      } else {
        console.log("key", key)
        // 处理基本数据类型包括函数
        target[key] = origin[key] // 递归后，处理的是target[key]这个对象，而不是target对象。
      }
    }
  }
  return target
}

const origin = {
  name: 'zh',
  fn: function bar () {
    console.log("bar")
  },
  arr: [
    1, 2,
    {
      fri: 'ppp'
    }
  ]
}
const deep = deepClone(origin)
deep.arr.fri = "ooo"
console.log(deep)
console.log(origin)