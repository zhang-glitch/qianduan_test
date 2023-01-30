
let obj = {
  name: 'zh',
  age: {
    num: 20
  }
}


function shallowReactive(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key];
    },

    set(obj, key, value) {
      console.log('更新页面UI')
      obj[key] = value;
      return true;
    }
  })
}

function shallowRef(obj) {
  return shallowReactive({ value: obj })
}

// let state = shallowReactive(obj)
// state.name = 'llm'
// state.age.num = 19


let stateRef = shallowRef(obj)

//这里不会更新ui界面。
stateRef.value.name = 'llm'

stateRef.value = {
  name: 'llm',
  age: {
    num: 19
  }
}


