import React from 'react'
import { atom, atomFamily, useRecoilValue } from 'recoil'

// const myAtom = atom({
//   key: 'myAtom',
//   default: (params) => params
// })
const myAtom = atomFamily({
  key: 'myAtom',
  default: (params) => params
})

function Test10() {
  const myA = useRecoilValue(myAtom({ name: 'zh' }))
  return (
    <div>
      <h2>测试默认情况下是否可以给atom函数传递参数</h2>
      <p>{myA.name}</p>
    </div>
  )
}
export default Test10
