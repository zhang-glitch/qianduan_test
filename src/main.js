import './a.css'
import sum from './a.js'

const a = 10
console.log('-===', a)
sum(3, 4, 5)
import(/* webpackChunkName: "b"  */ './b').then((res) => {
  console.log('res', res)
})
