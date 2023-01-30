import React from 'react'

const UserContext = React.createContext({
  name: 'zh',
  age: 20
})

function enhanceComponent(WrapeComponent) {
  class newComponent extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {(user) => {
            return <WrapeComponent {...this.props} {...user} />
          }}
        </UserContext.Consumer>
      )
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
        <UserContext.Provider value={{ name: '===', age: 30 }}>
          <EnhanceApp />
          <EnhanceApp2 />
        </UserContext.Provider>
      </div>
    )
  }
}

export default ParentCom
