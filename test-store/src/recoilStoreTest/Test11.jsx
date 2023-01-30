import axios from 'axios'
import React from 'react'

import { atom, selector, useRecoilCallback, useRecoilValue } from 'recoil'

const itemsInCartState = atom({
  key: 'itemsInCartState',
  default: {}
})
const itemsInCart = selector({
  key: 'itemsInCart',
  get: async () => {
    const res = await axios('http://myjson.dit.upm.es/api/bins/fo6v')
    return res.data
  }
})

function Test11() {
  const logCartItems = useRecoilCallback(({ snapshot, set }) => async () => {
    // 异步获取异步数据。通过snapshot内部的getPromise触发异步操作
    const numItemsInCart = await snapshot.getPromise(itemsInCart)
    // 获取到数据后更新state
    set(itemsInCartState, numItemsInCart)
  })
  const items = useRecoilValue(itemsInCartState)

  return (
    <div>
      {items.name ? <p>{items.name}</p> : <p>暂无数据</p>}

      <button onClick={logCartItems}>获取数据</button>
    </div>
  )
}
export default Test11
