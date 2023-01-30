import React, { createContext } from 'react'

const ParentContext = createContext({
  color: 'red',
  value: 'zh======================'
})

export default class Parent extends React.Component {
  render() {
    return (
      <div>
        <ParentContext.Provider
          value={{ color: 'skyblue', value: 'llm==================' }}
        >
          <Son />
        </ParentContext.Provider>
      </div>
    )
  }
}

class Son extends React.Component {
  render() {
    return (
      <div>
        {/* 方式一： */}
        {/* <p style={{ color: this.context.color }}>{this.context.value}</p> */}
        {/* 方式二： */}
        <ParentContext.Consumer>
          {(item) => <p style={{ color: item.color }}>{item.value}</p>}
        </ParentContext.Consumer>
      </div>
    )
  }
}

// 方式一
// Son.contextType = ParentContext
