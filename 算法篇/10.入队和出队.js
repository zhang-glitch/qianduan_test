function unshift(e) {
  // 先判断队列是否满了
  if ((tail + 1) % arr.length == front) {
    // throw new Error("队列已满")
    resize(getCapacity() * 2)
  }
  arr[tail] = e
  tail = (tail + 1) % arr.length
}

// 这里的tail就是下次填入值的位置。为何防止复杂度震荡，缩容的时候，我们需要当元素降为1/4的时候，在缩容。

function resize(capacity) {
  const newData = []
  for (let i = front; i !== tail; i = (i + 1) % arr.length) {
    newData.push(arr[i])
  }

  arr = newData
  // 扩容后注意改变队头和队尾的位置
  front = 0
  tail = size
}
