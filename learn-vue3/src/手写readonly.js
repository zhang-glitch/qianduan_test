


function readonly(obj) {
  // 1. 判断传入的是否为对象
  if (typeof obj === 'object') {
    //2. 判断是否为数组
    if (obj instanceof Array) {
      //3. 遍历属性，看其是否是对象
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          obj[index] = readonly(item)
        }
      })
    } else {
      for (let key in obj) {
        // 4. 遍历属性，看其是否为对象
        if (typeof obj[key] === 'object') {
          obj[key] = readonly(obj[key])
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
      console.warn(`${key}不能被修改。`)
    }
  })
}


function shallowReadonly(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, value) {
      console.warn(`${key}不能被修改。`)
    }
  })
}

// let state = readonly([{ id: 1, name: 'zh', age: 20 }, { id: 2, name: 'llm', age: 19 }])

// state[0].id = 3;


let state = shallowReadonly({ id: 1, name: 'zh', age: { age: 20 } })

state.id = 3;
state.age.age = 3;
