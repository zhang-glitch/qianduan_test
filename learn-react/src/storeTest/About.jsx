import React, { PureComponent } from 'react'
import { increment, decrement } from '../store/actionCreators.js'
import store from '../store'
export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  decrement(num) {
    store.dispatch(decrement(num))
  }
  increment(num) {
    store.dispatch(increment(num))
  }

  render() {
    return (
      <div>
        <hr />
        <div>about</div>
        <div>{this.state.count}</div>
        <button onClick={(e) => this.decrement(5)}>-5</button>
        <button onClick={(e) => this.increment(5)}>+5</button>
      </div>
    )
  }
}
