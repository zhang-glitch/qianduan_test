import React from 'react'

export default class SetStateTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zh'
    }
  }

  handleClick = () => {
    this.setState({
      name: 'llm'
    })
    console.log(this.state.name)
  }

  componentDidMount() {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
      this.setState({
        name: 'llm'
      })
      console.log(this.state.name)
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button id="btn" onClick={this.handleClick}>
          按钮
        </button>
      </div>
    )
  }
}
