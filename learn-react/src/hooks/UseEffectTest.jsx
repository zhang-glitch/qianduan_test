import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'

function UseEffectTest() {
  const [count, setCount] = useState(0)
  const [obj, setobj] = useState({
    name: 'zh',
    age: 21
  })

  const editName = () => {
    setobj({
      name: 'llm'
    })
  }

  const editAge = () => {
    setobj({
      age: 30
    })
  }

  const [friends, setFriends] = useState(['zh', 'zhh'])
  // push方式
  const pushWay = () => {
    friends.push('llm')
    setFriends(friends)
  }
  // 新传入一个数组
  const newWay = () => {
    setFriends([...friends, 'llm'])
  }
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log('++++++++++++++')
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
    return () => {
      console.log('取消订阅')
    }
  }, [count])

  // useRef
  // const fnRef = useRef()
  // const numRef = useRef(count)
  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     console.log('先更新========')
  //   }, 3000)
  // })

  // console.log('==============')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr />
      <p>
        姓名： {obj.name} 年龄: {obj.age}
      </p>
      <button
        onClick={() => {
          editName()
        }}
      >
        修改姓名
      </button>
      <button
        onClick={() => {
          editAge()
        }}
      >
        修改年龄
      </button>

      <p>朋友</p>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <button
        onClick={(e) => {
          pushWay()
        }}
      >
        添加朋友push方式
      </button>
      <button onClick={newWay}>添加朋友新传入一个数组方式</button>
      <FnCom ref={fnRef}></FnCom>
      <h1>ref： {numRef.current}</h1>
      <h1>count: {count}</h1>
    </div>
  )
}

function FnCom() {
  return <div>函数式组件</div>
}

export default UseEffectTest
