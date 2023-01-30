var findDiagonalOrder = function (matrix) {
  if (matrix == []) return []
  let m = matrix.length
  let n = matrix[0].length
  let i = 0,
    j = 0
  let arr = []
  for (let l = 0; l < m * n; l++) {
    arr.push(matrix[i][j])
    if ((i + j) % 2 == 0) {
      if (j == n - 1) {
        i++
      } else if (i == 0) {
        j++
      } else {
        i--
        j++
      }
    } else {
      if (i == m - 1) {
        j++
      } else if (j == 0) {
        i++
      } else {
        i++
        j--
      }
    }
  }
  return arr
}

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
