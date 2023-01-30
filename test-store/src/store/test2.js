import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

class Person {
  constructor() {
    makeAutoObservable(this, null, { autoBind: true })
  }

  person = {}

  getPersonInfo() {
    runInAction(async () => {
      const res = await axios('http://myjson.dit.upm.es/api/bins/irav')
      this.person = res.data
    })
  }
}

export default new Person()
