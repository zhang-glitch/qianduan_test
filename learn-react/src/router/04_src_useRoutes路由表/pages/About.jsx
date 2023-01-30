import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h3>我是About的内容</h3>
      <Link to="message1">to message1</Link>
      <Link to="message2">to message2</Link>
      <hr />
      {Outlet}
    </div>
  )
}
