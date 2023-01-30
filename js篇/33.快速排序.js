function quickSort(arr) {
  sort(arr, 0, arr.length - 1)
}

function sort(arr, l, r) {
  if (l >= r) return

  let p = partition(arr, l, r)
  // partition判断元素之前的所有元素
  sort(arr, l, p - 1)
  // partition判断元素之后的所有元素
  sort(arr, p + 1, r)
}

// 假设[l, r]区间的第一个元素为判断元素。让其前面的元素都小于当前元素，后面的元素都大于当前元素
// j = l
// i = l + 1

function partition(arr, l, r) {
  let j = l
  for (let i = l + 1; i <= r; i++) {
    // 当当前i位置的元素小于判断元素，那么将让j++, 然后后交换i 和 j位置的元素。
    if (arr[l] > arr[i]) {
      j++
      ;[arr[j], arr[i]] = [arr[i], arr[j]]
    }
  }
  // 最后，当i越界后，即交换 j 和 l 位置的元素。
  ;[arr[j], arr[l]] = [arr[l], arr[j]]
  // 返回当前的j的位置
  return j
}

const arr = [4, 32, 2, 9, 5, 90]
quickSort(arr)
console.log(arr) // [ 2, 4, 5, 9, 32, 90 ]
