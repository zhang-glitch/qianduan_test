// function decorator2<T extends new (...args: any[]) => any>(constructor: T) {
//   return class extends constructor {}
// }

// @decorator2
// class Person5 {}

// const p1 = new Person5()
// ;(p1 as any).sayName()

function funcDecorate(
  target: any,
  funcName: string,
  descriptor: PropertyDescriptor
) {
  // descriptor.configurable = false
  // descriptor.enumerable = false
  // // descriptor.writable = false // 设置为false,则表示不能修改该方法，即不能重新赋值
  // descriptor.value = function () {
  //   return '修改'
  // }
  
  // descriptor.set(function () {
  //   return '0000'
  // })
  // descriptor.get
}

class Teacher {
  name: string
  constructor(name: string) {
    this.name = name
  }

  @funcDecorate
  sayName() {
    return this.name
  }

  // @funcDecorate
  // static foo() {}
}

const t = new Teacher('zh')
t.sayName = function () {
  // 编译不报错，但是运行报错
  return '111'
}
console.log(t.sayName())
