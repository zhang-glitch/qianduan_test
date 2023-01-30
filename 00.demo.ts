// // 只能在定义的时候才指定类型，实现的方法不能实现同名的方法
// function foo111(a: number): number

// function foo111(a: string): string

// function foo111(x) {
//   return x
// }

// let num111: unknown = 9

// let num222: null = undefined
// num222 = null

// let num222: undefined = undefined
// // num222 = null

// console.log(typeof num222)

// let num;
// let o: object = new String()
// o = undefined
// o = null
// o = [1, 2]

// function fn1(name: string, age?: number = 3) {
//   return age
// }

// function fn1(age?: number, name: string) {
//   return age
// }

// function foo111(first: string, last: string = 'zh') {
//   return first + last
// }

// console.log(foo111('llm', undefined)) //llm zh
// console.log(foo111('llm', null)) //llm null

// function fno(param: object): void
// function fno(param: number): void

// function fno(x) {
//   // return 1
//   console.log('====')
// } //这里的函数名只能是fn

// fno({})

// type w = (s: string) => void

// let e: w = (s) => {
//   console.log(s)
//   return null
// }

// console.log(e('22'))

// // 定义函数的重载类型
// // 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
// function add1(num1: number, num2: number): number // 没函数体
// function add1(num1: string, num2: string): string
// function add1(num1: string, num2: number): number // 没函数体
// function add1(num1: number, num2: string): string

// // 实现重载函数的内部逻辑
// // function add1(num1: any, num2: any): any {
// //   if (typeof num1 === 'string' && typeof num2 === 'string') {
// //     return num1.length + num2.length
// //   }
// //   return num1 + num2
// // }
// function add1(num1, num2) {
//   return num1 + num2
// }

// const result = add1(20, 30)
// const result2 = add1('abc', 'cba')
// console.log(result, result2)

// let arr1: ReadonlyArray<number> = [1, 2, 3]

// arr1 = [2, 2, 3]

// // arr[0] = 4 //尝试修改元素值，会报错

// let pp2: number = undefined

// abstract class P {
//   constructor(public name: string) {}

//   protected abstract printMeeting(): void // 必须在派生类中实现
// }

// class B extends P {
//   constructor() {
//     super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
//   }

//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.')
//   }
// }

// let b = new B()
// b.printMeeting() //这里是可以调用的

// class Parent {
//   constructor() {
//     ////这里的this 已经确定
//     console.log('this', this)
//     this.setup()
//   }

//   // setup = () => {
//   //   console.log('parent')
//   // }
//   setup = function () {
//     console.log('parent')
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super()
//   }

//   //实例上的方法
//   // setup = () => {
//   //   console.log('child')
//   // }
//   setup = function () {
//     console.log('child')
//   }
// }

// const child = new Child() // parent

// class Parent2 {
//   constructor() {
//     this.setup()
//   }

//   //原型上的方法
//   setup() {
//     console.log('parent')
//   }
// }

// class Child2 extends Parent2 {
//   constructor() {
//     super()
//   }
//   setup() {
//     console.log('child')
//   }
// }

// const child2 = new Child2() // child

// interface Named {
//   name: string
// }

// let x: Named
// // y's inferred type is { name: string; location: string; }
// let y = { name: 'Alice', location: 'Seattle' }
// x = y

// let x = (a: number) => 0
// let y = (b: number, s: string) => 0

// y = x // OK
// x = y // Error

// let x = () => ({ name: 'Alice' })
// let y = () => ({ name: 'Alice', location: 'Seattle' })

// x = y // OK
// y = x // Error, because x() lacks a location property

class Animal {
  feet: number
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number
  static size: number
  constructor(numFeet: number) {}
  
}

let animal1: Animal
let s: Size

animal1 = s // OK
s = animal1 // OK
