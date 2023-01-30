function randomArr(arr) {
  let len = arr.length
  while (len--) {
    // 数组长度的随机数。
    let num = Math.floor(Math.random() * arr.length)
    ;[arr[num], arr[len]] = [arr[len], arr[num]]
  }
}

const arr = [1, 2, 3, 4, 5]
p(arr)
console.log(arr)
