import { atom } from 'recoil'

export const todoListState = atom({
  // 设置唯一的key值，取值时使用
  key: 'todoListState',
  default: [
    { name: 'zh', age: 22 },
    { name: 'llm', age: 21 }
  ]
})
export const personState = atom({
  // 设置唯一的key值，取值时使用
  key: 'personState',
  default: 0
})
