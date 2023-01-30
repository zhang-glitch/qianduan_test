const { resolve, join } = require("path")
// || '../hao'
//  || '/llm'
const first = 'zhang';
const second = "./hao"
const third = './llm'

console.log(resolve(first, second, third)) //C:\zhang\hao\llm || C:\hao\llm || C:\llm
console.log(join(first, second, third))
