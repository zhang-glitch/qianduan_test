// import React, { Component } from 'react'
// import {
//   Link,
//   HashRouter,
//   Route,
//   BrowserRouter,
//   Routes,
//   Navigate
// } from 'react-router-dom'

// export default class RouterTest extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isFlag: false
//     }
//   }
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Link to="/">首页</Link>
//           <Link to="/about">关于</Link>
//           <Link to="/abc">abc</Link>
//           <Routes>
//             {/* 从上往下依次匹配，只会匹配到一个 */}
//             <Route path="/" element={<h1>首页</h1>}></Route>
//             <Route path="/about" element={<h1>关于</h1>}></Route>
//             <Route path="/abc" element={<h1>abc</h1>}></Route>
//             <Route path="/abc/:abc" element={<h1>动态abc</h1>}></Route>
//             <Route element={<h1>其他</h1>}></Route>
//             <Route
//               path="/user"
//               element={
//                 <div>
//                   {this.state.isFlag ? (
//                     <div>已登录</div>
//                   ) : (
//                     <Navigate to="/"></Navigate>
//                   )}
//                 </div>
//               }
//             ></Route>
//             {/* /*用于定义嵌套路由，home是一级路由，对应的路径/home*/}
//             <Route path="/home" element={<div>Home组件</div>}>
//               {/* /*test1 和 test2 是二级路由,对应的路径是/home/test1 或
//               /home/test2*/}
//               <Route path="test1" element={<div>test1组件</div>}></Route>
//               <Route path="test2" element={<div>test2组件</div>}></Route>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }

import React from 'react'
import { NavLink, useRoutes, BrowserRouter, Routes } from 'react-router-dom'
import routes from './routes.js'

export default function RouterTest() {
  //根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  return (
    <div>
      <NavLink to="/about?name=zh&age=30">ppp</NavLink>
      {/* ...... */}
      {/* 注册路由 */}
      {element}
      {/* ...... */}
    </div>
  )
}
