interface Bird {
  fly: boolean
  sing: (name: string) => void
}

interface Dog {
  fly: boolean
  running: (name: string) => void
}

// 通过类型断言，进行类型保护
function animal(ani: Bird | Dog) {
  // if (ani.fly) {
  ;(ani as Bird).sing('pp')
  // } else {
  ;(ani as Dog).running('pp')
  // }
}

// 通过判断是否有独立的属性，来做类型保护。
// typeof, in, instanceof Object.prototype.toString.call()。。。。
