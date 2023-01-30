import React, { useState } from 'react'
import { atom, useRecoilState } from 'recoil'
const person = atom({
  key: 'myCounter',
  // 定义默认值
  default: {
    name: 'zh',
    age: 20
  }
})

function Test7() {
  const [obj, setObj] = useRecoilState(person)

  const handleClick = () => setObj({ name: `直接传入修改的值-${obj.age}` })
  const handleClick2 = () =>
    setObj((oldVal) => {
      return {
        name: `updater修改-${oldVal.age}`
      }
    })

  // 对比useState
  const [value, setValue] = useState({ p: 'pp', q: 'qq' })

  const handleClick3 = () => {
    setValue({
      // 这里返回的值，会直接覆盖
      p: `直接修改-${value.q}`
    })
  }
  const handleClick4 = () => {
    setValue((oldVal) => {
      return {
        p: `updater修改-${oldVal.q}`
      }
    })
  }

  return (
    <div>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
      <button onClick={handleClick}>修改</button>
      <button onClick={handleClick2}>修改</button>
      <hr />
      <p>{value.p}</p>
      <p>{value.q}</p>
      <button onClick={handleClick3}>修改</button>
      <button onClick={handleClick4}>修改</button>
    </div>
  )
}

export default Test7
