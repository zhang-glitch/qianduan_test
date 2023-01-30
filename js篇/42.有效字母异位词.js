var isAnagram = function (s, t) {
  // 利用hash表
  if (s.length !== t.length) return false
  const arr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let a = s[i].charCodeAt() - 'a'.charCodeAt()
    // let curIndex = arr.indexOf(a);
    // if(curIndex != -1) {
    //     arr[i] = arr[i] + 1;
    // }else { // 没有
    //     arr[a] = 1;
    // }
    arr[a]++
  }
  console.log(arr)

  for (let i = 0; i < t.length; i++) {
    let a = t[i].charCodeAt() - 'a'.charCodeAt()
    // let curIndex = arr.indexOf(a);
    // if(curIndex != -1) {
    //     arr[i] = arr[i] - 1;
    // }
    if (arr[a] != 0) {
      arr[a]--
    }
  }
  console.log(arr)

  // 判断数组中元素是否都为0
  for (let i of arr) {
    if (i != 0) {
      return false
    }
  }
  return true
}

console.log(isAnagram('rat', 'car'))
