// 就是让数组前面的元素局部有序。


function sort (arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      // 如果前面的元素大于当前的元素，我们就循环查找前面的元素
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
}


const arr = [2, 5, 1, 7, 100, 10]
sort(arr)

console.log(arr)