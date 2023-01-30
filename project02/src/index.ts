console.log('index page')

// $(() => {
//   alert('hello')
//   $('body').html('this is div')

//   $('body').html('ppp')
// })

interface Person1 {
  name: string
  age: number
  gender: string
}

class P1 {
  constructor(private info: Person1) {}

  // 这里为什么可以使用Person1[T]
  getInfoByKey<T extends keyof Person1>(key: T): Person1[T] {
    return this.info[key]
  }
}

const p1 = new P1({
  name: 'zh',
  age: 24,
  gender: 'male'
})

const infoName = p1.getInfoByKey('name')
console.log(infoName)
