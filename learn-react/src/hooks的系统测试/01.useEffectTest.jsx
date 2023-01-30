import React, { useEffect, useState } from 'react'

function UseEffectTest() {
  const [age, setAge] = useState(20)
  const btnClick = () => {
    console.log('====btnClick')
    setAge(age + 1)
  }
  useEffect(() => {
    console.log('=====useEffectTest-----age', age)
  })

  // 为【】数组时，他将只在页面第一次渲染的时候加载。
  // 为 【age】时，他将在age每次改变的时候重新加载。不管useEffect内部是否使用了提供的依赖。
  // 无第二个参数，那么只要页面重新渲染他就会执行。
  return (
    <>
      <div>age: {age}</div>
      <button onClick={btnClick}>改变age</button>
    </>
  )
}

export default UseEffectTest
