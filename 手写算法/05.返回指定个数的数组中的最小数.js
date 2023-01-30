// 给定一个数组，返回最小的k个数字，数组中可能会有重复数字，不需要去重

const arr = [4, 2, 9, 99, 0, 0, 199, 100, 22, 1, 8, 96, 92, 98];


// 方式一： 使用sort排序
function minNumber (arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k)
}


// 方式二： 使用min + indexOf方法
function minNumber1 (arr, k) {
  let minArr = []
  while (k--) {
    const mins = Math.min(...arr)
    minArr.push(mins);
    const minIndex = arr.indexOf(mins)
    // 这个方法刚好可以改变元数组
    arr.splice(minIndex, 1);
  }
  return minArr
}

// 方式三，通过自己设置排序算法对数组排序，然后取出结果

console.log(minNumber(arr, 4))
console.log(minNumber1(arr, 4))