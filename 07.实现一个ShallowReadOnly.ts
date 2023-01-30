type ShallowReadOnly<T> = {
  readonly // 只有在泛型中才可以使用extends
  [key in keyof T]: T[key]
}

interface Friends {
  name: string
  age: number
}

interface P {
  name: string
  friends: Friends
}

const obj: ShallowReadOnly<P> = {
  name: 'zh',
  friends: {
    name: 'jcl',
    age: 22
  }
}

obj.friends.name = 'pp'
obj.name = 'oo' // 报错。该属性为只读的。
