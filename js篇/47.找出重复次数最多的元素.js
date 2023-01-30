var topKFrequent = function (nums, k) {
  const map = new Map()
  for (let i of nums) {
    if (map.has(i)) {
      // 存在就加一
      map.set(i, map.get(i) + 1)
    } else {
      map.set(i, 1)
    }
  }
  console.log(map)

  const maxArr = [...map.values()].sort((a, b) => b - a).slice(0, k)
  return maxArr
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
