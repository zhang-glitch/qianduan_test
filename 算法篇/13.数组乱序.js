function randomArr(arr) {
  // return arr.sort(() => Math.random() > 0.5)
  return arr.sort(() => Math.random() - 0.5)
}

// function randomArr(arr) {
//   let len = arr.length
//   while (len--) {
//     // 创建一个和数组长度范围一样的随机数，然后交换二者的位置。
//     const r = Math.floor(Math.random() * arr.length)
//     ;[arr[r], arr[len]] = [arr[len], arr[r]]
//   }
// }

const arr = [1, 2, 3, 4, 5, 6]
console.log(randomArr(arr))
