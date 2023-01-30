// splice(下标， 删除的个数， )

const arr = [1, 23]
// console.log(arr.splice(0, 0, [2, 3]), arr)


Array.prototype.mySplice = function (index, deleteCount = 0, ...addArgs) {
  let arr = this;
  // 删除元素
  if (deleteCount) {
    arr = this.slice(index, index + deleteCount);
  }
  // 添加元素
  for (let i = arr.length - 1; i <= index; i--) {
    arr[i + addArgs.length] = arr[i]
  }
  let j = 0;
  for (let i = index; i < addArgs.length; i++) {
    arr[i] = addArgs[j++]
  }
}


console.log(arr.mySplice(0, 1), arr)