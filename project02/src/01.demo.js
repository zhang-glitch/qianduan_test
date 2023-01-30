class Person {
  constructor(name) {
    // this.name = "zh"
    this.name = name;  // 这个添加的都是对象上
  }
  // 这个也是对象上
  sayName = () => {
    console.log("===")
  }
}

const p = new Person("llm")
console.log(Person.prototype, p)