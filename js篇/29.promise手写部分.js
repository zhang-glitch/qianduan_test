const p1 = new Promise((res) => {
  setTimeout(() => {
    res('111')
  }, 1000)
})
const p2 = new Promise((res, reject) => {
  setTimeout(() => {
    // reject('222')
    res('222')
  }, 2000)
})
const p3 = new Promise((res) => {
  setTimeout(() => {
    res('333')
  }, 3000)
})

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = []
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          arr.push(res)
          if (arr.length === promises.length) {
            resolve(arr)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

Promise.myAll([p1, p2, p3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
