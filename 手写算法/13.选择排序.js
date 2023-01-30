// 每次循环都可以找出最小的元素。

function sort (arr) {
  const newArr = []
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const min = Math.min(...arr);
    // 将该元素保存在新数组中
    newArr.push(min)
    const minIndex = arr.indexOf(min);
    // 删除元素中该元素
    arr.splice(minIndex, 1)
  }
  return newArr
}


console.log(sort([2, 5, 1, 7, 100, 10]))