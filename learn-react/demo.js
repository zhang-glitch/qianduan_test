console.log(Object.assign({}, {age: 20, name: {
  a: "zh"
}}, {name: {
  b:  "llm"
}})) //{ name: { b: 'llm' } } 只会查找第一层属性，然后后者覆盖前者