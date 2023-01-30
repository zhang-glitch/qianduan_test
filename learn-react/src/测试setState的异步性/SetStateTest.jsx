import React, { Component } from 'react'

class SetStateTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zh'
    }
  }

  handleBtn = () => {
    this.setState({
      name: 'llm'
    })
    console.log(this.state.name) // setState是异步操作
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.handleBtn}>通过setState改变state值</button>
      </div>
    )
  }
}

export default SetStateTest
