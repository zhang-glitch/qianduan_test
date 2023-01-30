// 编写一个函数，传入一个promise和数字n，n(s)内promise没有返回结果，直接reject

async function fn (promise, n) {
  await new Promise(resolve => {
    setTimeout(resolve, n * 1000);
  })
  promise.then(res => {
    resolve(res)
  });

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {

    }, n * 1000)
  })

  if (!result) {
    // Promise.reject("---")
  } else {
    console.log(result)
    return result
  }
}


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("000")
  }, 3000)
})
fn(promise, 2)