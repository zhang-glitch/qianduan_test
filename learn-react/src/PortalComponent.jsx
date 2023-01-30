import React from 'react'
import ReactDOM from 'react-dom'

function Modal(props) {
  return ReactDOM.createPortal(props.children, document.getElementById('modal'))
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.refDom = React.createRef()
  }
  render() {
    return (
      <div>
        <Modal>
          <h1>modal标题</h1>
        </Modal>
      </div>
    )
  }
}
