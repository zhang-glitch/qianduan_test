import {
  makeObservable,
  action,
  observable,
  computed,
  makeAutoObservable,
  autorun,
  reaction,
  configure,
  runInAction
} from 'mobx'

// configure({
//   enforceActions: 'never'
// })
class Num {
  constructor() {
    // makeObservable(this, {
    //   // 让其成为可响应式的属性
    //   num: observable,
    //   // action: 表示指定该方法是一个action方法，不让控制台报警告
    //   // bound: 表示自动绑定该方法的this
    //   up: action.bound,
    //   down: action.bound,
    //   // computed: 表示当前值是一个计算值。会存在缓存
    //   double: computed
    // })

    makeAutoObservable(this, {}, { autoBind: true })
  }

  num = 0

  up() {
    this.num++
  }

  down() {
    this.num--
  }

  // 异步操作, 错误的异步
  increment() {
    setTimeout(() => {
      this.num++
    })
  }

  // // 正确的异步：方式一
  // incrementAsync() {
  //   setTimeout(this.up, 1000)
  // }

  // 正确的异步，方式二
  incrementAsync() {
    setTimeout(() => {
      runInAction(() => {
        this.num++
      })
    }, 1000)
  }

  get double() {
    return this.num * 2
  }
}

const num1 = new Num()

// autorun(() => {
//   console.log('自动收集依赖，然后执行...', num1.num)
// })

// reaction(
//   () => num1.num,
//   () => {
//     console.log('指定依赖，然后监听执行...', num1.num)
//   }
// )

export default num1
