// typeof
// 特别注意一下这几个值
console.log(typeof 10n) // bigint
console.log(typeof null) // object
console.log(typeof function () {}) // function
// instanceof: 依赖原型链来确定该变量是否是该类的对象。
// mdn上的解释：instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

class Person {
  constructor(name) {
    this.name = name
  }
}

const p = new Person('zh')
console.log(p instanceof Person) // true

// toString
const arr = []
console.log(Object.prototype.toString.call(arr)) // [object Array]

// Number、String，Boolean，Array，RegExp、Date、Function等内置对象均重写了Object原型上的toString方法，作用为将当前数据类型转为字符串类型。

// const num = 123
// num.toString()
// 该toString调用的是Number.prototype.toString方法。
// 但是Number.prototype.__proto__ = Object.prototype
// Object中也存在tostring函数。该函数返回的是当前对象的类型字符串。[object Number]
// 所以各个包装类和内置类都重写了toSring方法。
