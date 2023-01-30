
import React from 'react';

export default class App extends React.Component {
  // 这里的设置props默认值不是依赖于Prop-types的。
  static defaultProps = {
    name: "=====",
    age: 30
  }


  constructor(props) {
    super(props)
    this.state = {
      sex: "000"
    }
  }
  // static propTypes = {
  //   name: String,
  //   age: String
  // }
  // shouldComponentUpdate() {
  //   return false
  // }
  

  componentDidUpdate(prev1State, prev2, prev3) { // 这上面的参数都获取的是以前的值
    // this.setState({
    //   sex: "==="
    // })
    console.log(prev1State, prev2, prev3)
    console.log(this.state.pp)
  }
  componentDidMount() {
    console.log("-------------------------")
  }

  handleClick = () => {
    this.setState({
      pp: "++++++++++++"
    }, () => {
      console.log(this.state.pp)
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.state.sex}</h1>
        <h1>{this.state.pp}</h1>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}

