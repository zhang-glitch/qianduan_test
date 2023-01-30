const obj = {
  bar() {
    return 1
  },
  a: null,
  b: undefined,
  c: Symbol()
}

const info = JSON.parse(JSON.stringify(obj)) // {a: null}。null是可以被序列化的

