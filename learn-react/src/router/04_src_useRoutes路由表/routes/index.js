import About from '../pages/About'
import Home from '../pages/Home'
// import {Navigate} from 'react-router-dom'
import Profile from '../pages/Profile'

function Message1() {
  return <h2>message1</h2>
}
function Message2() {
  return <h2>message2</h2>
}
const routes = [
  
	{
		path:'/',
		// element:<Navigate to="/about"/>
    element: <Profile></Profile>
	},
	{
		path:'/about',
		element:<About/>,
    children: [
      {
        path: "message1",
        element: <Message1></Message1>
      },
      {
        path: "message2",
        element: <Message2></Message2>
      }
    ]
	},
	{
		path:'/home',
		element:<Home/>
	}
]


export default routes