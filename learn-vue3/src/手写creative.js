
// 原理就是将每层对象用proxy包装一下。
function reactive(obj) {
  // 1. 判断传入的是否为对象
  if (typeof obj === 'object') {
    //2. 判断是否为数组
    if (obj instanceof Array) {
      //3. 遍历属性，看其是否是对象
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          obj[index] = reactive(item)
        }
      })
    } else {
      for (let key in obj) {
        // 4. 遍历属性，看其是否为对象
        if (typeof obj[key] === 'object') {
          obj[key] = reactive(obj[key])
        }
      }
    }
  } else {
    return console.log('传入的非对象。')
  }
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, value) {
      obj[key] = value
      console.log('视图更新')
      return true;
    }
  })
}


//手写ref

function ref(obj) {
  return reactive({ value: obj })
}


// let state = reactive([{ id: 1, name: 'zh', age: 20 }, { id: 2, name: 'llm', age: 19 }])
// state[0].name = 'zjj'
// state[0].id = 3;
let state = ref([{ id: 1, name: 'zh', age: 20 }, { id: 2, name: 'llm', age: 19 }])

state.value[0].name = 'zjj'
state.value[0].id = 3;