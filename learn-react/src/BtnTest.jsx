import React from 'react'

// export default class BtnTest extends React.Component {
export default class BtnTest extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      text: ';;;;'
    }
  }

  changeText = () => {
    // 即使render函数中没有引用text，这也会使render函数更新。
    this.setState({
      text: ']]]]'
    })
  }

  handleClick = () => {
    console.log('点击按钮')
    // this.setState({
    //   num: this.state.num + 1
    // })
    // this.setState({
    //   num: this.state.num + 1
    // })
    // this.setState({
    //   num: this.state.num + 1
    // })
    this.setState((state, props) => {
      return {
        num: state.num + 1
      }
    })
    this.setState((state, props) => {
      return {
        num: state.num + 1
      }
    })
    this.setState((state, props) => {
      return {
        num: state.num + 1
      }
    })
  }
  // shouldComponentUpdate(newProps, newState) {
  //   // 这里都是new值。
  //   console.log(newProps, newState)
  //   return false
  // }
  render() {
    console.log('=========')
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.handleClick}>按钮</button>
        <button onClick={this.changeText}>按钮</button>
      </div>
    )
  }
}
