import React from 'react'
import { useRecoilState } from 'recoil'
import { personState } from '../../recoilStore/index'

export default function UseStateTest() {
  const [person, setPerson] = useRecoilState(personState)
  const handleClick = () => {
    setPerson(100)
  }

  console.log('=====看其页面是否重新渲染====引用state，但是未使用', person)
  return (
    <div>
      <div>使用useRecoilState</div>
      <button onClick={handleClick}>修改</button>
    </div>
  )
}
