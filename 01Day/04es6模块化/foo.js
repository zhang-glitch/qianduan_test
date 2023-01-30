let name = "zh";
const obj = {
  name: 'llm'
}

setTimeout(() => {
  console.log("导出的obj.name", obj.name) // pppp
}, 2000)

setTimeout(() => {
  name = 'qqqq'
})

export {
  name,
  obj
}