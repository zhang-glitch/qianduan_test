// 手撕算法: 两个长度不等的有序数组合并成一个有序数组, 不能使用 sort


const arr1 = [1, 3, 4, 6, 9]
const arr2 = [1, 2, 7, 9, 20]

const arr = arr1.concat(arr2)
for (let i = 0; i < arr.length; i++) {
  let temp = 0;
  for (let j = arr.length - 1; j > i; j--) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp
    }
  }
}
console.log(arr)