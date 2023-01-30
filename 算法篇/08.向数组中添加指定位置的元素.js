function insertByIndex(index, arr, item) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]
  }
  // for (let i = arr.length - 1; i >= index; i--) {
  //   arr[i + 1] = arr[i]
  // }
  arr[index] = item
}
const arr = [1, 2, 3, 4, 5]
insertByIndex(2, arr, 6)
console.log(arr)
