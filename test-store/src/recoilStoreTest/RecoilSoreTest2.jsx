import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../recoilStore/index'

export default function RecoilStoreTest2() {
  // const todoList = useRecoilValue(todoListState)
  const [listState, setListState] = useRecoilState(todoListState)
  const addItem = function () {
    setListState((oldState) => {
      return [...oldState, { name: 'jcl', age: 20 }]
    })
  }
  return (
    <>
      <h1>测试二</h1>
      <ul>
        {listState.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
      <button onClick={addItem}>添加数据</button>
    </>
  )
}
