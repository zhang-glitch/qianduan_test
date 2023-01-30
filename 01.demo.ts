const a = 'oo'
const symbol: symbol = Symbol()
const str: string = 'oos'

console.log(symbol)
console.log(str)

let num = 1
const num2 = 1

function foo(): void {
  // void 可以时undefined类型
  return undefined
}

function add({ first: string, second: string2 }) {
  return string + string2
}

let rawData = '{"name": "zh"}'

interface User {
  name: string
  age: number
}

const users: User[] = [
  {
    name: 'zh',
    age: 20
  }
]

interface Person {
  name: string
  age?: number
}

function foo1(p: Person) {
  console.log(p)
}

const p = {
  name: 'zh',
  sex: 9
}

// 强校验
foo1({
  name: 'zh',
  sex: 9
})

// 弱校验
foo1(p)

// interface可以定义一个函数类型

interface SayHi {
  (str: string): string
}

type SayHiType = (str: string) => string

function SayHi foo3(){}


interface U {
  name: string
}
interface P {
  age: number
}

// 可以多继承
interface PP extends U, P {
  sex: number
}


const pp: PP = {

}

abstract class A {
  // 抽象方法前面必须加上abstract
  abstract getArea(): number
}