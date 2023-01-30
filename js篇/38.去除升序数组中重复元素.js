// 注意数组是升序排列的
var removeDuplicates = function (nums) {
  // let n = 0;
  // for(let i = 0; i + 1 < nums.length; i++) {
  //     // 1 1 2
  //     //
  //     if(nums[i] == nums[i + 1]) {
  //         nums[i] = nums[i + 1];
  //         n += 1;
  //     }
  // }
  // return n;
  return [...new Set(nums)]
}
console.log(removeDuplicates([1, 1, 2]))
