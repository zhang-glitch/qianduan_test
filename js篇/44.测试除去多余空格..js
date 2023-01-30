var reverseWords = function (s) {
  // 不使用原生函数
  //  - 移除多余空格
  //  - 将整个字符串反转
  //  - 将每个单词反转
  s = s.trim()
  let arr = s.split('')
  let slowIndex = 0
  let fastIndex = 0
  let count = 0 // 记录相邻空格数
  for (; fastIndex < arr.length; fastIndex++) {
    if (arr[fastIndex] == ' ') {
      count++
    } else {
      count = 0
    }
    if (count <= 1) {
      // 当时字符时或者只有一个空格时，赋值
      arr[slowIndex] = arr[fastIndex]
      slowIndex++
    }
  }
  // 截取slowIndex之前的元素
  arr = arr.slice(0, slowIndex)
  console.log(arr)
  // 反转字符
  // let left = 0;
  // let right = arr.length - 1;
  // while(left < right) {
  //     [arr[left], arr[right]] = [arr[right], arr[left]];
  //     left++;
  //     right--;
  // }

  // // return arr.join(" ").replaceAll(/\s+/g, " ")
  // return arr.join(" ")
}

reverseWords('the  book  is me')
