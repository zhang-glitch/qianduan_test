import React, { memo, useCallback, useState } from 'react'

// 如果他不加memo，那么父组件渲染，子组件就会默认重新渲染，不管每次btnClick是否相同。
// 浅层比较
function Son(props) {
  console.log('触发事件，主要是为了测试useCallback', props.btnClick)
  return (
    <div>
      <button>触发事件，主要是为了测试useCallback</button>
    </div>
  )
}

// const Son1 = memo(Son)

export default function UseCallbackTest() {
  const [state, setState] = useState(20)
  const [other, setOther] = useState('zh')
  console.log('父组件渲染=======')
  const btnClick = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    state
  }, [state])
  // 只要state改变，useCallback就会返回一个不一样的函数。
  // 如果state不变，那么会怎么样呢？ state没有改变，那么他将不会重新渲染子组件。

  return (
    <div>
      <button onClick={() => setState(state + 1)}>改变state</button>
      <button onClick={() => setOther(other + '1')}>
        改变other，才能测试出useCallback的作用
      </button>
      <Son btnClick={btnClick} />
      {/* <Son1 btnClick={btnClick} /> */}
    </div>
  )
}
