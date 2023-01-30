function trueMatch(str) {
  const arr = [] // 用于保存左括号
  for (let s of str) {
    if (s === '[' || s === '{' || s === '(') {
      s.push(s)
    } else {
      // 不是的就取出栈顶元素
      let item = s.pop()
      if (s !== ')' || item !== '(') {
        return false
      } else if (s !== '}' || item !== '{') {
        return false
      } else if (s !== ']' || item !== '[') {
        return false
      }
    }
  }
  return true
}


