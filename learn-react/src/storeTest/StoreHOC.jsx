import React, { PureComponent } from 'react'
// import store from '../store'
import StoreContext from './context.js'

export default function StoreHOC(mapStateToProps, mapDispatchToProps) {
  return (WrappedComponent) => {
    class HoComponent extends PureComponent {
      static contextType = StoreContext
      constructor(props, context) {
        super(props, context)
        this.state = context.getState()
      }

      componentDidMount() {
        // 需要跟新state
        // store.subscribe(() => {
        //   this.setState(store.getState())
        // })
        this.context.subscribe(() => {
          this.setState(this.context.getState())
        })
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.state)}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        )
      }
    }
    return HoComponent
  }
}
