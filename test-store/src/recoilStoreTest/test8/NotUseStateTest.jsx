import React from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { personState } from '../../recoilStore/index'

export default function NotUseStateTest() {
  const setPerson = useSetRecoilState(personState)
  const resetPerson = useResetRecoilState(personState)

  console.log('=====看其页面是否重新渲染====不引用state')
  return (
    <div>
      <div>使用useSetRecoilState</div>
      <button
        onClick={() => {
          setPerson(2)
        }}
      >
        修改
      </button>
      <button onClick={resetPerson}>重置</button>
    </div>
  )
}
