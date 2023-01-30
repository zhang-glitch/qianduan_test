class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }

  say() {
    console.log('name', this.name)
  }
}

function foo<T>(p: T) {
  return p
}

foo<Person>(new Person('ppp'))
