import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.less'

// import App from './App'
// import AppTest2 from './AppTest2'
// import SlotTest from './SlotTest'
// import SetStateTest from './SetStateTest'
// import BtnTest from './BtnTest.jsx'
// import PureComTest from './PureComTest.jsx'
// import EventBusTest from './EventBusTest.jsx'
// import FormTest from './FormTest.jsx'
// import AppTest from './AppTest.jsx'
// import HocTest from './HocTest.jsx'
// import HocContextTest from './HocContextTest.jsx'
// import RefConvertTest from './RefConvertTest.jsx'
// import PortalComponent from './PortalComponent.jsx'
// import About from './about'
// import Home from './home'
// import ClassTest from './ClassTest.jsx'
// import AntdTest from './AntdTest.jsx'
// import ToDoList from './ToDoList'
// import ContextTest from './ContextTest.jsx'
import About from './storeTest/About.jsx'
import Home from './storeTest/Home.jsx'
// import StoreContext from './storeTest/context'
import store from './redux-test/store2/store'
import { Provider } from 'react-redux'

import RouterTest from './router/RouterTest.jsx'
import Store2Test from './redux-test/components/Store2Test.jsx'
import SetStateTest from './测试setState的异步性/SetStateTest.jsx'
import UseEffectTest from './hooks的系统测试/01.useEffectTest.jsx'
import UseCallbackTest from './hooks的系统测试/02.useCallbackTest.jsx'

// ReactDOM.render((
//   <SlotTest>
//     <p>p标签</p>
//     <a href="#">a标签</a>
//     <div>div标签</div>
//   </SlotTest>
// ), document.getElementById("root"))
// ReactDOM.render((
//  <div>
//    <Home></Home>
//    <About></About>
//  </div>
// ), document.getElementById("root"))

// ReactDOM.render((
// <div>
//   <Provider store={store}>
//     <Home></Home>
//     <About></About>
//   </Provider>
// </div>
// ), document.getElementById("root"))

// import {BrowserRouter} from 'react-router-dom'
// import App from './router/04_src_useRoutes路由表/App.jsx'

// ReactDOM.render(
// 	<BrowserRouter>
// 		<App/>
// 	</BrowserRouter>,
// 	document.getElementById('root')
// )

// import UseEffectTest from './hooks/UseEffectTest.jsx'
// ReactDOM.render(<UseEffectTest />, document.getElementById("root"))

// redux测试

ReactDOM.render(
  // <Provider store={store}>
  //   <Store2Test />
  // </Provider>,
  // <SetStateTest></SetStateTest>,
  // 测试useEffect
  // <UseEffectTest />,
  // 测试useCallback
  <UseCallbackTest />,
  document.getElementById('root')
)

// ReactDOM.render((
//   <SlotTest leftSlot={<div>left标签</div>} rightSlot={<div>right标签</div>}  />
// ), document.getElementById("root"))
