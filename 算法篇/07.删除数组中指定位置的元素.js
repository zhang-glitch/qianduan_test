function deleteByIndex(index, arr) {
  for (let i = index; i + 1 < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
}
const arr = [1, 2, 3, 4, 5]
deleteByIndex(2, arr)
console.log(arr)
