// instanceof:它的使用，就是判断右边的变量是否在左边变量的原型链上。

// console.log([] instanceof Array) // true


function myInstanceof (left, right) {
  while (true) {
    if (left === null) {
      return false
    }
    if (left.__proto__ === right.prototype) {
      return true
    }

    // 一步步查找原型链，看其原型是否等于指定的原型
    left = left.__proto__;
  }
}


console.log(myInstanceof([], Object))

// console.log([] === null)// false