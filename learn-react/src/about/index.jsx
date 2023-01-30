import React, { PureComponent } from 'react'
import style from './style.module.css'
export default class About extends PureComponent {
  render() {
    return (
      <div id={style.styleColor} className={style.font}>
        About
      </div>
    )
  }
}
