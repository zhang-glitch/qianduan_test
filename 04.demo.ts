// const func = (a, b) => a + b; 要求编写Typescript，要求a，b参数类型一致，都为number或者都为string
// const func: (a: number | string, b: number | string) => number | string = (
//   a,
//   b
// ) => {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a + b
//   } else {
//     return a + b
//   }
// }

import { type } from 'os'
import { Interface } from 'readline'

// const func: <T>(a: T, b: T) => T = (a, b) => {
//   return a + b
// }

function func<T>(a: T, b: T) {
  if (typeof a === 'string' && typeof b === 'string') {
    return `${a}${b}`
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
}

// function func<T>(a: T, b: T) {
//   return `${a}${b}`
// }

const res = func(1, 1)
console.log(res)

// type str = number | string

// function func(a: str, b: str): str {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return `${a}${b}`
//   } else {
//     return a + b
//   }
// }

// const res = func(1, 2)

interface IType {
  str1: string
  str2: string
  num1: number
  num2: number
}

type FilterKeys<T, U> = {
  [key in keyof T]: T[key] extends U ? never : key
}[keyof T]

type Fix<T, U> = Pick<T, FilterKeys<T, U>>

type A1 = Fix<IType, string>
// console.log()
const a1: A1 = {
  num1: 1,
  num2: 2
}

// // type Fix = /* ... */

// // 把所有string类型的排除
// type A1 = Fix<IType, string>;  // => { num1: number, num2: number }

// // 把所有number类型的排除
// type A2 = Fix<IType, number>;  // => { str1: string, str2: string }

// keyof的使用
interface A {
  content: string
  width: number
  height: number
}





