// function decorator(isFlag: boolean) {
//   if (isFlag) {
//     return function (constructor: any) {
//       constructor.prototype.sayName = function () {
//         console.log('llm')
//       }
//     }
//   } else {
//     return function (constructor: any) {}
//   }
// }

// function decorator1(constructor: any) {
//   constructor.prototype.sayName = function () {
//     console.log('zh')
//   }
// }

// @decorator(true)
// @decorator1
// class Person4 {}

// const p = new Person4()
// ;(p as any).sayName()



// function testDecorator() {
//   return function <T extends new (...args: any[]) => any>(constructor: T) {
//     return class extends constructor {
//       sayName() {
//         return this.name
//       }
//     }
//   }
// }

// const Test = testDecorator()(
//   class {
//     name: string
//     constructor(name: string) {
//       this.name = name
//     }
//   }
// )

// const test = new Test('zh')
// console.log(test.sayName()) // zh



function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target);
  // descriptor的作用：对方法中的属性做一些编辑
  descriptor.writable = true;
  // 通过调用 .value 的方式，可以对原来的方法做一些变更
  descriptor.value = function () {
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test = new Test('Monday');
test.getName = () => {
  return '123';
};
console.log(test.getName()); // decorator
