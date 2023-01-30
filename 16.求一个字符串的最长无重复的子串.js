// 求一个字符串的最长无重复的子串

//  实现思路：将字符串元素循环放入到数组中，判断是否有存在的元素，然后删除存在元素之前的全部元素。每次循环都要统计一下数组中的长度，直到最后。



function notRepeatStr(str) {
  let arr = [];
  let max = 0;
  // let resArr = [];

  for(let i = 0; i < str.length; i++) {
    if(arr.includes(str[i])) { // 数组中存在，将其前面的元素都删除。
      arr.splice(0, arr.indexOf(str[i]) + 1);
    }

    // 数组中不存在
    arr.push(str[i]);
    max = Math.max(arr.length, max);
  }
  return arr.join("");
}


console.log(notRepeatStr("ASDWASDWe"));