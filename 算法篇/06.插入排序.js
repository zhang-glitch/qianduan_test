function insertSort(arr) {
  // [0, i)以排好序
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 当前值和[0, i)之间的值进行比较
      if (arr[j] < arr[j - 1]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
}

// 优化插入排序
function insertSort1(arr) {
  // [0, i)以排好序
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let j = i
    for (; j > 0; j--) {
      // 当前值和[0, i)之间的值进行比较
      if (current < arr[j - 1]) {
        // 这里只是向后移，并不交换位置，所以current的值不能被改变。
        arr[j] = arr[j - 1]
      } else {
        break
      }
    }

    arr[j] = current
  }
}

// 换个方法实现插入排序

function insertSort2(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i]
    let j
    for (j = i; j < arr.length - 1; j++) {
      // current再[i, length - 1]区间进行比较。
      if (current > arr[j + 1]) {
        // 向前移
        arr[j] = arr[j + 1]
      } else {
        break
      }
    }
    arr[j] = current
  }
}

const arr = [2, 5, 1, 6, 3, 9]
insertSort2(arr)
console.log(arr)
