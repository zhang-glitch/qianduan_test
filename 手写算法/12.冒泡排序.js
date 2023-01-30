// 每一次外层循环都能确定一个最小值。
function sort (arr) {
  const len = arr.length;
  // len - 1的目的是我们只需要比较4次
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    console.log("每次循环都输出arr", arr)
  }
}


const arr = [2, 5, 1, 7, 100, 10]
sort(arr)

console.log(arr)