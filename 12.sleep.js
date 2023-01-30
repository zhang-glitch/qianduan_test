// function sleep (delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, delay)
//   })
// }

// console.log("1111")
// sleep(3000).then(res => {
//   console.log("2222")
// })





function sleep (delay) {
  return new Promise(reslove => {
    setTimeout(reslove, delay)
  })
}

!async function test () {
  const t1 = +new Date()
  await sleep(3000)
  const t2 = +new Date()
  console.log(t2 - t1)
}()
