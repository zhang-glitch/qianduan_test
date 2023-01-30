import { atom, selector, useRecoilState } from 'recoil'
import React from 'react'
const counter = atom({
  key: 'myCounter',
  // 定义默认值
  default: '0'
})

const proxySelector = selector({
  key: 'ProxySelector',
  // 直接传入想要获取的auto,而不是auto中定义的key值字符串
  get: ({ get }) => get(counter),
  set: ({ set }, newValue) => {
    set(counter, newValue)
  }
})

export default function Test4() {
  // 对atom提供的state进行读写。
  // const [count, setCount] = useRecoilState(counter)
  // const incrementByOne = () => setCount(count + 1)
  const [count, setCount] = useRecoilState(proxySelector)
  const incrementByOne = () => setCount(count + 1)

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={incrementByOne}>Increment</button>
    </div>
  )
}
