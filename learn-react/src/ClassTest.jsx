import React from 'react'
import classNames from 'classnames'

export default function ClassTest(props) {
  return (
    <div>
      <p className={'pp ' + (true ? 'active' : '')}>iiii</p>
      {/* 这里的class会用,链接 */}
      <p className={['title', 'active']}>oooo</p>
      <p className={['title', 'active'].join(' ')}>ppppp</p>
      <div
        className={classNames(
          { active: true },
          'title',
          undefined,
          null,
          0,
          NaN,
          '',
          true,
          10
        )}
      >
        classnams格式
      </div>
    </div>
  )
}
