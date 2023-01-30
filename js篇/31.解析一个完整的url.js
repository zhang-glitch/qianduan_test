const url = 'http://localhost:8080/detail?id=1#header-8'

const params = new URL(url)

console.log(params.hash)
