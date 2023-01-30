// 发布订阅者模式
class EventEmitter {
  constructor() {
    this.events = []
  }

  // 订阅事件
  on (fnName, fn) {
    if (!this.events.hasOwnProperty(fnName)) {
      this.events[fnName] = []
    }
    this.events[fnName].push(fn)
  }

  // 触发事件
  emit (fnName, ...args) {
    if (this.events.hasOwnProperty(fnName)) {
      this.events[fnName].forEach(item => {
        item(...args)
      })
    }
  }

  // 移除事件
  off (fnName, callback) {
    if (this.events.hasOwnProperty(fnName)) {
      this.events[fnName] = this.events[fnName].filter(item => item !== callback)
    }
  }

  // 移除指定类型的所有事件
  allOff (fnName) {
    if (this.events.hasOwnProperty(fnName)) {
      delete this.events[fnName]
    }
  }

  // 指触发一次
  once (fnName, fn) {
    function fn1 () {
      // 当触发事件后调用一次就将其删除
      fn()
      this.off(fnName, fn)
    }
    this.on(fnName, fn1)
  }
}


const eventEmitter = new EventEmitter()
const fn = function (name) {
  console.log("name", name)
}

eventEmitter.on("zh", fn);
eventEmitter.emit("zh", "llm1", "llm2")
eventEmitter.off("zh", fn)
eventEmitter.emit("zh", "llm3", "llm4")