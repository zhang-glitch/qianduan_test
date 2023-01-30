import React, { PureComponent } from 'react'
import { List, Avatar } from 'antd'
// import {} from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'

export default class ToDoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          title: 'Ant Design Title 1'
        },
        {
          id: 1,
          title: 'Ant Design Title 2'
        },
        {
          id: 2,
          title: 'Ant Design Title 3'
        },
        {
          id: 3,
          title: 'Ant Design Title 4'
        }
      ]
    }
  }
  handleDelete(index) {
    console.log('====', index)
    const data = [...this.state.data]
    delete data[index]
    this.setState({
      data
    })
  }
  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div
                className="delete-clear"
                onClick={(e) => this.handleDelete(index)}
              >
                <DeleteOutlined />
                <span>删除</span>
              </div>
            </List.Item>
          )}
        />
      </div>
    )
  }
}
