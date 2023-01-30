// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("00000")
//     reject("00000")
//   }, 2000)
// })

import { promises } from 'stream'

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("11111")
//     // resolve("1111")
//   }, 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("9999")
//     reject("9999")
//   }, 3000)
// })

// // Promise.race([p1, p2, p3]).then(res => {
// //   console.log("res", res)
// // })

// // Promise.any([p1, p2, p3]).then(res => {
// //   console.log("res:", res)
// // }).catch(err => {
// //   console.log("err:", err.errors) //err: (3) [1111, 2222, 3333]
// // })

// function all(promises) {
//   // 当所有的promise都变为fulfilled,改变promise的状态就被改变。
//   // 当有一个promise变为rejected，那么promise的状态就被改变。
//   return new Promise((resolve, reject) => {
//     const resArr = []
//     for(let i = 0; i < promises.length; i++) {
//       promises[i].then(res => {
//         resArr.push(res)
//         // 这个一定要放在最后判断。
//         if(resArr.length === promises.length) {
//           resolve(resArr)
//         }
//       }).catch(err => {
//         reject(err)
//       })
//     }
//   })
// }

// function allSettled(promises) {
//   // 当所有的promises状态都改变了，那么将返回结果。并且结果中有各个promise的状态
//   return new Promise((resolve, reject) => {
//     const resArr = []
//     for(let i = 0; i < promises.length; i++) {
//       promises[i].then(res => {
//         resArr.push({status: "fulfilled", res})
//       }).catch(err => {
//         resArr.push({status: "rejected", err})
//       }).finally(() => {
//         // 这个一定要放在最后判断。
//         if(resArr.length === promises.length) {
//           resolve(resArr)
//         }
//       })
//     }
//   })
// }

// function race(promises) {
//   // 返回最先的改变状态的状态。
//   return new Promise((resolve, reject) => {
//     for(let i = 0; i < promises.length; i++) {
//       promises[i].then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     }
//   })
// }

// function any(promises) {
//   // 全部变为rejected是，返回全部。
//   // 有一个变为fulfilled时，状态改变
//   return new Promise((resolve, reject) => {
//     const resArr = []
//     for(let i = 0; i < promises.length; i++) {
//       promises[i].then(res => {
//         resolve(res)
//       }).catch(err => {
//         resArr.push(err)
//         // 这个一定要放在最后判断。
//         if(resArr.length === promises.length) {
//           reject(resArr)
//         }
//       })
//     }
//   })
// }

// // race([p1, p2, p3]).then(res => {
// //   console.log("res", res)
// // }).catch(err => {
// //   console.log("err", err)
// // })

// any([p1, p2, p3]).then(res => {
//   console.log("res", res)
//   // return "111"
// }).catch(err => {
//   console.log("err", err)
// })

// // allSettled([p1, p2, p3]).then(res => {
// //   console.log("res", res)
// // }).catch(err => {
// //   console.log("err", err)
// // })

// // all([p1, p2, p3]).then(res => {
// //   console.log("res", res)
// // }).catch(err => {
// //   console.log("err", err)
// // })

// 两数之和
function funAdd(arr, target) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    // map.set(i, arr[i]);
    map.set(arr[i], i)
  }

  for (let i = 0; i < arr.length; i++) {
    let restNum = target - arr[i]
    // 错误的解法
    // if(res === map.get(i) && arr[i] !== res) {
    //   return [res, arr[i]]
    // }
    if (map.has(restNum) && i !== map.get(restNum)) {
      return [i, map.get(restNum)]
    }
  }
}

console.log(funAdd([7, 2, 3, 4, 5, 6], 5))

// 压缩字符串
function zipStr(str) {
  // let newStr = "";
  const resArr = []
  let count = 1
  let currentStr = str[0]
  for (let i = 1; i < str.length; i++) {
    if (currentStr === str[i]) {
      // console.log("=====", str[i])
      count++
      // newStr =  newStr + count + currentStr;
      resArr.push(count + currentStr)
      currentStr = str[i]
    } else {
      // console.log("+++++", str[i])
      count = 1
      currentStr = str[i]
    }
  }
  console.log('[]', resArr)
  return resArr.join('')
}

console.log(zipStr('aabbaaad'))

// Promise.reject(1).catch(err => {return err}).then(res => {
//   console.log(res) // 1
// })

const obj1 = {
  name: 'p',
  foo() {
    console.log('this', this)
  }
}

const obj2 = {
  name: 'o',
  // bar: obj1.foo
  obj1
}

// obj2.bar()  // this { name: 'o', bar: [Function: foo] }
// obj2.obj1.foo() // this { name: 'p', foo: [Function: foo] }
