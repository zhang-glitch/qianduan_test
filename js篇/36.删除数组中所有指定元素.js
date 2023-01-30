function a(nums, val) {
  // const res = nums.filter((item) => {
  //   if (item != val) return item
  // })
  // console.log(res)
  // return res.length

  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != val) {
      nums[slowIndex] = nums[fastIndex]
      // 这个就相当于新数组的长度。
      slowIndex++
    }
  }
  console.log(nums)
  return slowIndex
}

console.log(a([2, 3, 3, 2], 2))
