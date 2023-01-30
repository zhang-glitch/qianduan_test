const EventEmitter = require("events");


const events = new EventEmitter();

// 监听事件
events.addListener("zhanghao", (...args) => {
  console.log("addListener监听", ...args)
})
const listener1 = (...args) => {
  console.log("on监听", ...args)
}
events.addListener("llm", listener1)

// events.off("llm", listener1)


events.removeAllListeners("llm")
// 注册事件
events.emit("zhanghao", "我的")
events.emit("llm", "他的")

console.log(events.listenerCount('zhanghao'))
console.log(events.listeners('llm'))