class Dep {
  constructor() {
    this.dependentFn = new Set()
  }

  // 收集依赖函数
  depend() {
    if (watchFn) {
      this.dependentFn.add(watchFn)
    }
  }

  notify() {
    for (let item of this.dependentFn) {
      item()
    }
  }
}

let watchFn = null

function watchEffect(fn) {
  watchFn = fn
  fn()
  watchFn = null
}

// 触发依赖的数据结构
const weakMap = new WeakMap()
function getDep(target, key) {
  let targetMap = weakMap.get(target)
  if (!targetMap) {
    targetMap = new Map()
    weakMap.set(target, targetMap) // 这个map是保存每个key对应的dep对象的。
  }

  // weakMap: {targetMap: {key: dep}}
  let dep = targetMap.get(key)
  if (!dep) {
    dep = new Dep()
    targetMap.set(key, dep)
  }
  return dep
}

// vue3对raw进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, newValue) {
      const dep = getDep(target, key)
      target[key] = newValue
      dep.notify()
    }
  })
}

const obj = {
  name: 'zh'
}

const proxy = reactive(obj)

watchEffect(function bar() {
  console.log(proxy.name)
})


watchEffect(function () {
  proxy.age = 20
  console.log(proxy)
})

watchEffect(function () {
  console.log(proxy.age)
})
