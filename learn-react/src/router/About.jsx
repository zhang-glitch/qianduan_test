import React, { PureComponent } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function About() {
  const [search, setSearch] = useSearchParams()
  console.log(search.get('name'))
  return (
    <div>
      <button onClick={() => setSearch('id=008&title=哈哈&content=嘻嘻')}>
        点我更新一下收到的search参数
      </button>
      About
    </div>
  )
}
