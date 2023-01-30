// var math = require('mathjs')
// console.log(math.add(0.1, 0.2)) //0.30000000000000004
// console.log(math.format(math.add(math.bignumber(0.1), math.bignumber(0.2)))) //'0.3'

let a = 0.1
let b = 0.2

const result = parseFloat((a + b).toFixed(1))

console.log(typeof result, result)
