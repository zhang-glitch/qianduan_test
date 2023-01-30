// 方法一
const arr = [1, 2, 3, 2, 4, 4, 5]

const arr1 = new Set(arr)
console.log("arr", [...arr1])


// 方式二： 通过对象相同键值覆盖原则
const obj = {}
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = "zh"
}
console.log(Object.keys(obj).map(item => Number(item)));

// 方式三： 双循环
const arr2 = []
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       arr2.push(arr[i]);
//     } else {
//       arr2.push(arr[i]);
//       break;
//     }
//   }
// }
for (let i = 0; i < arr.length; i++) {
  let flag = true;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    arr2.push(arr[i])
  }
}

console.log("arr2", arr2)

// 通过indexOf
let arr3 = []
for (let i = 0; i < arr.length; i++) {
  if (arr.slice(i + 1).indexOf(arr[i]) === -1) {
    arr3.push(arr[i])
  }
}

console.log("arr3", arr3)