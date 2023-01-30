import React, { PureComponent } from 'react'
import { increment, decrement, getBannerList } from '../store/actionCreators.js'
// import store from '../store'
// import StoreHOC from './StoreHOC'
import { connect } from 'react-redux'
import axios from 'axios'
class Home extends PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState(store.getState())
  //   })
  // }

  // decrement(num) {
  //   store.dispatch(decrement(num))
  // }
  // increment(num) {
  //   store.dispatch(increment(num))
  // }
  componentDidMount() {
    this.props.getBannerList()
    // axios({
    //   url: 'http://123.207.32.32:8000/home/multidata'
    // }).then((res) => {
    //   this.props.getBannerList(res.data.data.banner.list)
    //   console.log('props', this.props)
    // })
  }

  render() {
    return (
      <div>
        <div>home</div>
        <div>{this.props.count}</div>
        <button onClick={(e) => this.props.decrement(5)}>-5</button>
        <button onClick={(e) => this.props.increment(5)}>+5</button>
        <h1>banner</h1>
        <ul>
          {this.props.banners &&
            this.props.banners.map((item) => {
              return <li key={item.acm}>{item.title}</li>
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})
const mapDispatchToProps = (dispatch) => ({
  decrement(num) {
    dispatch(decrement(num))
  },
  increment(num) {
    dispatch(increment(num))
  },
  getBannerList() {
    dispatch(getBannerList)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
