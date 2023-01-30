function get(obj, str) {
  let reg = /\[([0-9])\]/g
  const arr = str.split('.')

  // 保存当前属性取值对象
  let current = null
  // console.log('=====', arr, reg.exec('b[0]'))
  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      // 正则匹配数组取值。
      // [ 'a', [ 'b', '[0]' ], 'c', 'a' ]
      arr[i] = [arr[i].split('[')[0], arr[i].split('[')[1].slice(0, 1)]
    } else {
      continue
    }
  }

  for (let i = 0; i < arr.length; i++) {
    // 判断该item是否是数组取值。
    if (Array.isArray(arr[i])) {
      // 当该item时一个数组时 [b, [0]]
      if (isHasKey(current || obj, arr[i][0])) {
        // console.log(o.a.b[0].c.a)
        if (current) {
          // 当前值不是已经被赋值
          current = current[arr[i][0]][arr[i][1]] // o.a["b"]
        } else {
          current = arr[i][0][arr[i][1]]
        }
      } else {
        // 传入的对象中不能找到属性
        return undefined
      }
    } else {
      // item不是一个数组
      // o.a.b[0].c.a
      if (isHasKey(current || obj, arr[i])) {
        // 判断该属性是否在这里面
        if (current) {
          current = current[arr[i]] // o["a"][]
        } else {
          current = obj[arr[i]] // o["a"]
        }
      } else {
        // 传入的对象不能找到属性
        return undefined
      }
    }
  }
  return current
}

function isHasKey(obj, str) {
  return Object.keys(obj).includes(str)
}

console.log(
  get(
    {
      a: {
        b: [
          {
            c: {
              a: 'zh'
            }
          }
        ]
      }
    },
    'a.b[0].c.a'
  )
)
console.log(
  get(
    {
      name: 'zh'
    },
    'name'
  )
)

// const o = {
//   a: {
//     b: [
//       {
//         c: {
//           a: 'zh'
//         }
//       }
//     ]
//   }
// }

// console.log(o.a['b'][0])
