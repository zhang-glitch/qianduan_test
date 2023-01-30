import { observer } from 'mobx-react'
import React from 'react'
import person from '../store/test2'

function Test2() {
  return (
    <div>
      <h1>展示个人信息</h1>
      <p>{person.person.name}</p>
      <p>{person.person.age}</p>
      <button onClick={person.getPersonInfo}>点击获取</button>
    </div>
  )
}

export default observer(Test2)
