import React, { PureComponent } from 'react'
import { Button } from 'antd'
import P from 'components/home/about'
export default class AntdTest extends PureComponent {
  render() {
    return (
      <div>
        <>
          <P></P>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </>
      </div>
    )
  }
}
