import React from 'react'
import EventEmitter from 'events'

const eventEmitter = new EventEmitter()

class Com extends React.Component {
  getName(...args) {
    console.log(args)
  }
  componentDidMount() {
    // eventEmitter.addListener('name', this.getName)
    eventEmitter.on('name', this.getName)
  }
  render() {
    return <div>子元素</div>
  }
}
// function Com() {
//   return <div>子元素</div>
// }

export default class EventBusTest extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.fnDom = null
    this.componentDom = React.createRef()
    this.c = null
  }

  handleEmit() {
    eventEmitter.emit('name', 'zh', 'llm')
  }
  componentDidMount() {
    console.log('======', this.refs.stringRef)
    console.log('======', this.domRef.current)
    console.log('======', this.fnDom)
    console.log('++++++', this.componentDom.current)
    console.log('++++++', this.refs.componentDom)
    console.log('++++++', this.c)
  }
  render() {
    return (
      <div>
        <Com ref={this.componentDom} />
        <Com ref="componentDom" />
        <Com
          ref={(el) => {
            this.c = el
          }}
        />
        <div ref="stringRef">字符串获取dom</div>
        <div ref={this.domRef}>createRef获取dom</div>
        <div
          ref={(dom) => {
            this.fnDom = dom
          }}
        >
          通过函数获取dom
        </div>
        <button onClick={this.handleEmit}>传递事件</button>
      </div>
    )
  }
}
