const userInfo: any = undefined

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = function () {
      try {
        fn()
      } catch (e) {
        console.log(msg)
      }
    }
  }
}

function testDecorate(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  target.getp = function () {
    console.log('getP')
  }
}

class Test1 {
  @catchError('userInfo.name 不存在')
  @testDecorate
  getName() {
    return userInfo.name
  }
  @catchError('userInfo.age 不存在')
  getAge() {
    return userInfo.age
  }
}

const test1 = new Test1()
test1.getName() // userInfo.name 不存在
test1.getAge()
;// userInfo.age 不存在
(test1 as any).getp()
