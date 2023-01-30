import React, { PureComponent } from 'react'
import style from './style.module.css'
export default class Home extends PureComponent {
  render() {
    return (
      <div id={style.styleColor} className={style.font}>
        home
      </div>
    )
  }
}
