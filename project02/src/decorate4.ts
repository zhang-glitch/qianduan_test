// function propDecorate(target: any, propName: string): any {
//   // 参数一表示该属性类的原型对象
//   // 参数二表示该属性的名字
//   console.log(target == Teacher3.prototype, propName) // true name
//   let descriptor: PropertyDescriptor = {
//     writable: false
//   }
//   return descriptor
// }

function paramDecorate(target: any, key: string, paramIndex: number) {
  console.log(target === Teacher3.prototype, key, paramIndex) // true sayText 1
                                                              // true sayText 0
}

class Teacher3 {
  // @propDecorate
  name: string
  constructor(name: string) {
    this.name = name
  }

  sayText(@paramDecorate text: string, @paramDecorate other: any) {
    return text
  }
}

const t3 = new Teacher3('zh')
