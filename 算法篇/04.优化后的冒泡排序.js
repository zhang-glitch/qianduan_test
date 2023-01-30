function bobble(nums) {
  let i
  for (i = 0; i < nums.length; ) {
    let last = 0
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        last = j + 1
      }
    }
    i = nums.length - last // 如果直接是last就是死循环。
  }
}

const arr = [2, 5, 1, 6, 3, 9]
bobble(arr)
console.log(arr)
