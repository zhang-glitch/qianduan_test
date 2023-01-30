
import {INCREMENT, DECREMENT} from './constants'
import axios from 'axios'
// 返回一个对象{type, value}

export const increment = num => ({
  type: INCREMENT,
  value: num
})
export const decrement = num => ({
  type: DECREMENT,
  value: num
})
// export const getBannerList = list => ({
//   type: "getBannerList",
//   value: list
// })
export const getBannerList = (dispatch, getState) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then((res) => {
    dispatch({
        type: "getBannerList",
        value: res.data.data.banner.list
      })
  })
}