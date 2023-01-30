
// 函数柯里化：就是保存每次传入函数中的参数，然后最后一下调用函数

function curry (fn, ...args1) {
  let argsAll = [...args1]
  return (...args2) => {
    argsAll = [...argsAll, ...args2];
    fn()
  }
}