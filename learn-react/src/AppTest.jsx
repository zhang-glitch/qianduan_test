import React from 'react'
import propTypes from 'prop-types'

// export default function AppTest(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }
export default class AppTest extends React.Component {
  constructor(props) {
    super(props)
    this.inputDom = React.createRef()
    // this.state = {
    // }
  }
  componentDidMount() {
    this.inputDom.current.addEventListener('change', (e) => {
      console.log('========', e.target.value)
    })
  }
  render() {
    return (
      <div>
        <form action="#">
          <input type="text" ref={this.inputDom} />
        </form>
      </div>
    )
  }
}

// AppTest.defaultProps = {
//   name: 11, // 这里会报警告
// }

// // 他也会检查默认值的类型是否正确
// AppTest.propTypes = {
//   name: propTypes.string
// }
