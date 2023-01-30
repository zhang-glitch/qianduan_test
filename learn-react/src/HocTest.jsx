import React from 'react'

function enhanceComponent(WrapeComponent) {
  class newComponent extends React.Component {
    render() {
      return <WrapeComponent {...this.props} age="30" />
    }
  }
  // newComponent.displayName = 'pp'
  return newComponent
}

class App extends React.Component {
  render() {
    return (
      <div>
        App1: {this.props.name} - {this.props.age}
      </div>
    )
  }
}

function App2(props) {
  return (
    <div>
      App2: {props.name} - {props.age}
    </div>
  )
}

const EnhanceApp = enhanceComponent(App)
const EnhanceApp2 = enhanceComponent(App2)

class ParentCom extends React.Component {
  render() {
    return (
      <div>
        <EnhanceApp name="zh" />
        <EnhanceApp2 name="gl" />
      </div>
    )
  }
}

export default ParentCom
