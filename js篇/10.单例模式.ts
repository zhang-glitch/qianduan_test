class Singleton {
  private constructor(private name: string) {}

  private static instance: Singleton

  static getInstance(name: string) {
    if (this.instance !== null) {
      return this.instance
    } else {
      this.instance = new Singleton(name)
    }
  }
}

const a: Singleton = Singleton.getInstance('zh')
const b = Singleton.getInstance('zh')
console.log(a === b) // true
