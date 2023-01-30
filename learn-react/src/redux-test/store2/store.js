import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.js' // 返回该模块的reducer

export default configureStore({
  reducer: {
    counter: counterReducer // 就是该模块的reducer函数
  }
})
