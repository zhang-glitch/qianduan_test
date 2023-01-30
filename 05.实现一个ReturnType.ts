type Foo = () => { a: string }

// 泛型继承自一个函数，所以传入的泛型一定是一个函数类型。然后又等于了
type MyReturnType<T extends (...arg: any) => any> = T extends (
  ...arg: any
) => infer RT
  ? RT
  : never

const p2: MyReturnType<Foo> = {
  a: 'l'
}
