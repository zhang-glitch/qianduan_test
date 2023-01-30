export default function sum(...args) {
  return args.reduce((pre, next) => pre + next, 0)
}

console.log('改变了一个分包的内容，看其chunkhash是否全部改变')
