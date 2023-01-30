const arr = [1, 2, 3]

// 这个不可以
// arr.forEach(item => {
//   if(item == 1) {
//     break;
//   }
// })

for (let i in arr) {
  console.log(i)
  if (i == 1) {
    break
  }
}

for (let i of arr) {
  console.log(i)
  if (i == 1) {
    break
  }
}

// arr.find((item) => {
//   if (item == 1) {
//     break;
//   }
// })
