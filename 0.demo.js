const queryString = 'http://baidu.com/seaerch?name=zh&age=22'
// const queryParams = new URLSearchParams(queryString) // 返回一个可迭代对象
// console.log(typeof queryParams) //{ 'name' => 'zh', 'age' => '22' }
// const paramObj = Object.fromEntries(queryParams)
// console.log(paramObj)

const url = new URL(queryString)
const query = Object.fromEntries(url.searchParams)

console.log(query)
