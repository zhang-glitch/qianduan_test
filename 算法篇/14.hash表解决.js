var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  // 利用hash表
  const map = new Map()
  for (let i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1)
    } else {
      map.set(i, 1)
    }
  }

  for (let i of t) {
    if (map.has(i)) {
      map.set(i, map.get(i) - 1)
    }
  }

  console.log('map.values()', map.values())
  return [...map.values()].every((item) => item === 0)
}

isAnagram('anagram', 'nagaram')
