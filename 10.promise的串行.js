// const execute = async (tasks = []) => {
//   const resultList = [];
//   for (task of tasks) {
//     try {
//       resultList.push(await task());
//     } catch (e) {
//       resultList.push(null);
//       console.log(e);
//     }
//   }
//   if (tasks.length === resultList.length)
//     return "success"
//   else
//     return "fail"
// }


console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0

console.log(parseInt(undefined)) // NaN
console.log(parseInt(null)) // NaN
console.log(null + "1"); // 1  调用Number函数进行转换。
console.log(undefined + 1); // NaN


console.log("hello".indexOf("o")) // 4
console.log("hello".match("he")) // [ 'he', index: 0, input: 'hello', groups: undefined ]
console.log("hello".search("llo")) // 2
console.log(5 / 2) // 2.5
console.log(5 % 2)