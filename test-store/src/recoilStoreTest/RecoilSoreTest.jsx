import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../recoilStore/index'

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState)
  const [listState, setListState] = useRecoilState(todoListState) // 获取state，并获取更新的方法。
  const addItem = function () {
    setListState((oldState) => {
      return [...oldState, { name: 'jcl', age: 20 }]
    })
  }
  const removeItem = function (index) {
    // (oldState) => {
    // console.log('=========', oldState)
    // oldState.splice(index, 1)
    //   return [
    //     oldState.slice(0, index),
    //     oldState.slice(index + 1, oldState.length)
    //   ]
    // }
    listState.splice(index, 1)
    setListState(listState)
  }
  return (
    <>
      <h1>测试一</h1>
      <ul>
        {listState.map((item, index) => {
          return (
            <li key={index} onClick={removeItem(index)}>
              {item.name}
            </li>
          )
        })}
      </ul>
      <button onClick={addItem}>添加数据</button>
    </>
  )
}
