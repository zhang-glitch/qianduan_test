import React, { PureComponent } from 'react'

// export default class PureComTest extends PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       words: ['pp']
//     }
//   }
//   handleAdd = () => {
//     this.setState({
//       words: [...this.state.words, 'zh', 'llm']
//     })
//   }
//   render() {
//     console.log('=========')
//     return (
//       <div>
//         <button onClick={this.handleAdd}>按钮</button>
//         {this.state.words}
//       </div>
//     )
//   }
// }

class ListOfWords extends React.PureComponent {
  render() {
    console.log('子组件')
    return <div>{this.props.words.join(',')}</div>
  }
}

// 如果继承Component,只要props,state改变，render就会重新渲染。
export default class PureComTest extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      words: ['marklar']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug // 这里的一个bug是使用了同一个数组。
    const words = this.state.words
    words.push('marklar')
    this.setState({ words: words })
  }

  render() {
    console.log('父组件')
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
        <ListOfWords words={this.state.words} />
      </div>
    )
  }
}
