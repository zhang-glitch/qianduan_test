import React, { Component } from 'react'
import './AppTest2.css'

function ChildCom(props) {
  const { currentIndex, list, handleActive } = props
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={item.id}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => handleActive(index)}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
      <div>{list[currentIndex].name}</div>
    </div>
  )
}

export default class AppTest2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          name: '流行',
          id: 1
        },
        {
          name: '新款',
          id: 2
        },
        {
          name: '精选',
          id: 3
        }
      ],
      currentIndex: 0
    }
  }

  // 改变活跃按钮
  handleActive = (activeIndex) => {
    this.setState({
      currentIndex: activeIndex
    })
  }
  render() {
    return (
      <ChildCom
        list={this.state.list}
        currentIndex={this.state.currentIndex}
        handleActive={this.handleActive}
      />
    )
  }
}
