import React from 'react'

export default class FormTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '默认值input',
      checkBoxValue: false,
      radioValue: false,
      textValue: '默认值text',
      selectValue: 'b',
      selectValues: []
    }
  }

  // input测试
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // checkbox
  handleCheckBoxChange(e) {
    this.setState({
      checkBoxValue: e.target.checked
    })
  }

  // radio
  handleRadioChange(e) {
    this.setState({
      radioValue: e.target.checked
    })
  }
  // select
  handleSelectChange(e) {
    this.setState({
      selectValue: e.target.value
    })
  }
  handleSelectChanges(e) {
    this.setState({
      selectValues: [...this.state.selectValues, e.target.value]
    })
  }
  render() {
    return (
      <form action="#">
        {/* 普通input */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e)}
        />
        {/* checkbox */}
        <input
          type="checkbox"
          value="男人"
          name="person"
          checked={this.state.checkBoxValue}
          onChange={(e) => this.handleCheckBoxChange(e)}
        />
        <input
          type="checkbox"
          value="女人"
          name="person"
          checked={this.state.checkBoxValue}
          onChange={(e) => this.handleCheckBoxChange(e)}
        />
        <input
          type="checkbox"
          value="老人"
          name="person"
          checked={this.state.checkBoxValue}
          onChange={(e) => this.handleCheckBoxChange(e)}
        />
        <input
          type="radio"
          name="sex"
          value="female"
          checked={this.state.radioValue}
          onChange={(e) => {
            this.handleRadioChanges(e)
          }}
        />
        <input
          type="radio"
          name="sex"
          value="male"
          checked={this.state.radioValue}
          onChange={(e) => {
            this.handleRadioChange(e)
          }}
        />
        {/* select 单选*/}
        <select
          value={this.state.selectValue}
          onChange={(e) => {
            this.handleSelectChange(e)
          }}
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
        {/* select 多选*/}
        <select
          value={this.state.selectValues}
          onChange={(e) => {
            this.handleSelectChanges(e)
          }}
          multiple
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </form>
    )
  }
}
