function sum(a, b, c) {
  return a + b + c
}

// console.log('====', sum.length) // 3   sum.length获取的是形参的长度

function burry(fn, ...args1) {
  // 将函数转为柯里化函数，所以需要返回一个函数
  return function inner(...args2) {
    const len = [...args1, ...args2].length
    if (len >= fn.length) {
      // 参数长度大于或等于fn形参长度
      return fn(...args1, ...args2)
    } else {
      // 小于fn形参的长度时，继续返回函数
      return (...args3) => {
        return inner(...args2, ...args3) // 这里需要把参数全部传入
      }
    }
  }
}

const fn = burry(sum, 1)
console.log(fn(2)(3))
