// 去除width属性
interface A {
  content: string
  width: number
  height: number
}


type DeleteWidth<T, Prop> = {
  [key in keyof T]:  key === Prop ? never : T[key]
}
