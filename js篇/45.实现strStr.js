var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) {
    // 当前面字符串小于后者时，那么将直接返回-1
    return -1
  }
  // 记录开始下标
  let startIndex = -1
  let count = 0 // 记下匹配的字符个数
  let j = 0 // 控制needle的移动
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j] && needle[j] != undefined) {
      startIndex = i
      count++
      j++
      if (count === needle.length) {
        return startIndex - count
      }
    } else {
      // 不相等，那么就让haystack下移，继续和needle比较
      j = 0
      count = 0
      startIndex = -1
    }
  }
  return startIndex
}

console.log(strStr('hello', 'll'))
