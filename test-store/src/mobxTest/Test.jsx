import React from 'react'
import { observer } from 'mobx-react'

// import Num from '../store/index'
import { person, num1 } from '../store/allIndex'
function Test() {
  return (
    <div className="App">
      <p>{num1.num}</p>
      <p>{num1.double}</p>
      <button onClick={num1.up}>增加</button>
      <button onClick={num1.down}>减少</button>
      <button onClick={num1.increment}>错误的异步，异步更新</button>
      <button onClick={num1.incrementAsync}>正确的异步1，异步更新</button>

      <hr />

      <p>{person().value.name}</p>
      <p>{person().value.age}</p>
      <button onClick={() => person().updateName()}>更新姓名</button>
      <button onClick={() => person().updateAge()}>更新年龄</button>
    </div>
  )
}

export default observer(Test)
