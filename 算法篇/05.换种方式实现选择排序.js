function selectSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let maxIndex = i
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j
      }
    }
    // for (let j = i; j >= 0; j--) {
    //   if (arr[j] > arr[maxIndex]) {
    //     maxIndex = j
    //   }
    // }
    wrap(arr, i, maxIndex)
  }
}

function wrap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [2, 5, 1, 6, 3, 9]
selectSort(arr)
console.log(arr)
