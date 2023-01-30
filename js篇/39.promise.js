const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('=====promise1')
    resolve('promise1')
  }, 1000)
})
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('=====promise2')
    resolve('promise2')
  }, 3000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('=====promise3')
    resolve('promise3')
  }, 2000)
})

// Promise.myAll = (promises) => {
//   return new Promise((rs, rj) => {
//     // 计数器
//     let count = 0
//     // 存放结果
//     let result = []
//     const len = promises.length

//     if (len === 0) {
//       return rs([])
//     }

//     promises.forEach((p, i) => {
//       // 注意有的数组项有可能不是Promise，需要手动转化一下
//       Promise.resolve(p)
//         .then((res) => {
//           count += 1
//           // 收集每个Promise的返回值
//           result[i] = res
//           // 当所有的Promise都成功了，那么将返回的Promise结果设置为result
//           if (count === len) {
//             rs(result)
//           }
//           // 监听数组项中的Promise catch只要有一个失败，那么我们自己返回的Promise也会失败
//         })
//         .catch(rj)
//     })
//   })
// }

// Promise.myAll = function (promises) {
//   return new Promise((resolve, reject) => {
//     const values = []
//     promises.forEach(async (promise) => {
//       // promise.then(
//       //   (res) => {
//       //     values.push(res) // 这里需要使用count去累加。
//       //     if (values.length === promises.length) {
//       //       resolve(values)
//       //     }
//       //   },
//       //   (err) => {
//       //     reject(err)
//       //   }
//       // )

//       try {
//         const res = await promise
//         values.push(res)
//         if (values.length === promises.length) {
//           resolve(values)
//         }
//       } catch (error) {
//         reject(error)
//       }
//     })
//   })
// }
Promise.myAll = function (promises) {
  // return new Promise((resolve, reject) => {
  //   const values = []
  //   promises.forEach(async (promise, i) => {
  //     // promise.then(
  //     //   (res) => {
  //     //     values.push(res) // 这里需要使用count去累加。
  //     //     if (values.length === promises.length) {
  //     //       resolve(values)
  //     //     }
  //     //   },
  //     //   (err) => {
  //     //     reject(err)
  //     //   }
  //     // )

  //     try {
  //       const res = await promise
  //       // values.push(res)
  //       values[i] = res
  //       if (values.length === promises.length) {
  //         resolve(values)
  //       }
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // })
  return new Promise((resolve, reject) => {
    const values = []
    let count = 0
    promises.forEach((promise, i) => {
      promise.then(
        (res) => {
          count++
          // values.push(res) // 这里需要使用count去累加。
          values[i] = res
          // if (values.length === promises.length) { // 这里也不能通过数组长度判断，因为后面的promise状态改变后直接就添加到values数组中，然后长度也为promises.length。但是前面的promise还没返回值。所以需要一个变量来控制。
          //   resolve(values)
          // }
          if (count === promises.length) {
            resolve(values)
          }
        },
        (err) => {
          reject(err)
        }
      )
    })
  })
}

Promise.myAll([p1, p2, p3]).then((res) => {
  console.log(res)
})
