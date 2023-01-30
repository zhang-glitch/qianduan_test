// interface Isay {
//   say: string
// }

interface Ishow {
  name: string
  age: number
}

// interface Ishow extends Isay {
//   name: string
//   age: number
// }

interface Isay extends Ishow {
  say: string
}

// const obj1: Ishow = {
//   name: 'zh',
//   age: 20,
//   say: 'pp'
// }

const obj2: Isay = {
  name: 'zh',
  age: 20,
  say: 'pp'
}

// 谁继承谁都行。
