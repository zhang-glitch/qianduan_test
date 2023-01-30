var canConstruct = function (ransomNote, magazine) {
  // 计数
  const arr = new Array(26).fill(0)
  for (let s of ransomNote) {
    arr[s.charCodeAt() - 'a'.charCodeAt()]++
  }

  for (let s of magazine) {
    arr[s.charCodeAt() - 'a'.charCodeAt()]--
  }

  console.log(arr)
  // 最后判断没有小于0的就返回true
  return arr.every((item) => item >= 0)
}

canConstruct('aa', 'aab')

// 将两个空格替换成一个空格
let s = 'a  b c  d'
// s = s.replaceAll('  ', ' ')
console.log(s.length)

// 改变字符串
let a = 'abc'
a[1] = 'p'
console.log(a)
