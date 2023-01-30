// 观察者模式： 观察者和被观察者之间存在关系。并且内部也实现了发布订阅者模式。
// 他与发布订阅者的区别在于：被观察者内部会自动告诉观察者状态改变，通知其作出相应变化。

class SubObject { //被观察者
  constructor(name) {
    this.name = name;
    this.observerArr = [] // 保存观察者实例
    this.state = "现在的状态"
  }

  attach (observe) {
    // 将观察者和被观察者结合。相当于订阅者
    this.observerArr.push(observe)
  }

  setState (newState) {
    this.state = newState
    // 状态改变通知观察者。相当于发布者
    this.observerArr.forEach(fn => {
      fn.update(this)
    })
  }
}


class Observer { // 观察者
  constructor(name) {
    this.name = name
  }
  update (s) { // 更新观察到的状态
    console.log(this.name + ": 被观察者" + s.name + "现在的状态是: " + s.state)
  }
}

const o1 = new Observer("观察者一")
const o2 = new Observer("观察者二")
const s = new SubObject("被观察者")


s.attach(o1)
s.attach(o2)

s.setState("被观察者状态改变。。。。")