function visitDecorate(
  target: any,
  funcName: string,
  descriptor: PropertyDescriptor
) {
  console.log(funcName)
  // descriptor.writable = false // 设置为false,则表示不能对访问器重新赋值
}

class Teacher2 {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  @visitDecorate
  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

const t2 = new Teacher2('zh')
t2.name = 'llm' // 报错
