import React from 'react'

// class Son extends React.Component {
//   render() {
//     return <div ref={this.props.refDom}>子组件</div>
//   }
// }
// function Son(props) {
//   return <div ref={props.refDom}>子组件</div>
// }

const ConvertComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>子组件</div>
))

export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.refDom = React.createRef()
  }
  componentDidMount() {
    console.log('==========', this.refDom.current) //  <div>子组件</div>
  }
  render() {
    return (
      <div>
        <ConvertComponent ref={this.refDom} />
      </div>
    )
  }
}
