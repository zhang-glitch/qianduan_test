// 给所有的函数添加一个hycall的方法
Function.prototype.mycall = function (thisArg, ...args) {
  // 1.获取需要被执行的函数
  var fn = this

  // 2.对thisArg转成对象类型(防止它传入的是非对象类型)
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  // 3.调用需要被执行的函数
  const symbol = Symbol()
  thisArg[symbol] = fn
  var result = thisArg[symbol](...args)
  delete thisArg[symbol]

  // 4.将最终的结果返回出去
  return result
}

function foo() {
  console.log(this)
}

foo.mycall([1, 2, 3])
