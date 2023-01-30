type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends object
    ? DeepReadonly<T[key]>
    : T[key]
}

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

const todo: DeepReadonly<X> = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}

todo.x = 'pp' // 报错
todo.x.a = '00' // 报错
