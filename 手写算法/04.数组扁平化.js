const arr = [0, [1, 2, 3], [[5, 6, 7]]]

/**
 * 
 * @param {Array} arr 
 * @param {Number} k 
 */

function flatter (arr, k = 1) {
  let length = arr.length
  let newArr = []
  // while (k--) {// 看其要展开多少层
  for (let i = 0; i < length; i++) {
    // 这里使用Array.isArray()判断数组中的每一项会发生穿透判断吗？
    if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
      newArr = newArr.concat(flatter(arr[i], k - 1))
      // console.log("newArr.concat(...arr[i])", Object.prototype.toString.call(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }

  // }
  return newArr
}

//函数功能：将多层嵌套的数组扁平化，k为展开的层数
function flat (arr, k) {
  if (k === 0) {
    return arr;
  }
  const len = arr.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      //注意concat方法是不改变原数组的，所以要重新赋值
      res = res.concat(flat(arr[i], k - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
//测试
console.log(flat([1, [2, [3, [4]]]], 2));

// function flatter (arr, k) {
//   if (!arr.length) return;
//   while (k-- && arr.some((item) => Array.isArray(item))) {
//     arr = [].concat(...arr);
//   }
//   return arr;
// }

console.log(flatter(arr, 1))