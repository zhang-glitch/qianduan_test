function foo(obj) {
  obj.pp = "pp"
}


const obj = {
  name: "zh"
}
foo(obj);

console.log(obj) //{ name: 'zh', pp: 'pp' }


function thunk(store) {
  const next = store.dispatch;
  // 把它当做dispatch函数
  function dispatchAndThunk(action) {
    if(typeof action === "function") {
      action(store.dispatch, store.getState)
    }else {
      next(action)
    }
  }
  store.dispatch = dispatchAndThunk
}


function applyMiddleware(...middleware) {
  for(let i = 0; i < middleware.length; i++) {
    store.dispatch = middleware[i](store)
  }
}

applyMiddleware(thunk)