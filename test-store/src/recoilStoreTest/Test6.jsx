import React from 'react'
import { atom, selector, useRecoilValue } from 'recoil'
const counter = atom({
  key: 'myCounter',
  // 定义默认值
  default: '0'
})

const proxySelector = selector({
  key: 'ProxySelector',
  // 直接传入想要获取的auto,而不是auto中定义的key值字符串
  get: ({ getCallback }) => {
    const addCounter = (value) => {
      getCallback(({ set }) => {
        console.log('====', value)
        set(counter, value)
      })
    }
    return {
      addCounter
    }
  }
})
function Test6() {
  const count = useRecoilValue(counter)
  const { addCounter } = useRecoilValue(proxySelector)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => addCounter(2)}>按钮</button>
    </div>
  )
}

export default Test6
