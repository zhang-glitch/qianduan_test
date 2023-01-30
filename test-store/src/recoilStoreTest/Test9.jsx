import React from 'react'
import { atom, selector, selectorFamily, useRecoilValue } from 'recoil'

const myAtom = atom({
  key: 'myAtom',
  default: 2
})

// const myAtomSelector = selector({
//   key: 'myAtomSelector',
//   get:
//     (index) =>
//     ({ get }) => {
//       let _myAtom = get(myAtom)
//       return `${_myAtom}-${index}`
//     }
// })
const myAtomSelector = selectorFamily({
  key: 'myAtomSelector',
  get:
    (index) =>
    ({ get }) => {
      let _myAtom = get(myAtom)
      return `${_myAtom}-${index}`
    }
})

function Test9() {
  const myAtomSele = useRecoilValue(myAtomSelector(9)) // 默认情况下不能给selector中的方法传递参数
  return (
    <div>
      <h2>测试默认情况下是否可以给get方法传递参数</h2>
      <p>{myAtomSele}</p>
    </div>
  )
}
export default Test9
