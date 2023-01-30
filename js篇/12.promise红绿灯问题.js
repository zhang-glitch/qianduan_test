// 题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promse 实现）

function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

// while (true) {
const run = () =>
  Promise.resolve()
    .then(() => {
      return new Promise((res) => {
        setTimeout(() => {
          red()
          res()
        }, 3000)
      })
    })
    .then(() => {
      return new Promise((res) => {
        setTimeout(() => {
          green()
          res()
        }, 2000)
      })
    })
    .then(() => {
      return new Promise((res) => {
        setTimeout(() => {
          yellow()
          res()
        }, 1000)
      })
    })
    .then(() => run())
// }

run()
