const params = new URLSearchParams('name=zh&age=20')

console.log(params) // URLSearchParams { 'name' => 'zh', 'age' => '20' }

const paramsObj = Object.fromEntries(params)

console.log(paramsObj) //{ name: 'zh', age: '20' }
