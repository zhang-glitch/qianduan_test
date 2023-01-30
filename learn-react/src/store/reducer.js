import {INCREMENT, DECREMENT} from './constants'


export default function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + action.value}
      // break;
    case DECREMENT:
      return {...state, count: state.count - action.value}
      // break;
    case "getBannerList":
      return {...state, banners: action.value}
      // break;
    default:
      // break;
      return state
  }
}