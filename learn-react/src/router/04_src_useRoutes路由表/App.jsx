import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  //根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  return (
    <div>
      <div className="list-group">
        {/* 路由链接 */}
        <NavLink className="list-group-item" to="/about">
          About
        </NavLink>
        <NavLink className="list-group-item" to="/">
          Profile
        </NavLink>
        <NavLink className="list-group-item" to="/home">
          Home
        </NavLink>
      </div>
      {/* 注册路由 */}
      {element}
    </div>
  )
}
