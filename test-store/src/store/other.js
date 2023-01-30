import { makeAutoObservable } from 'mobx'

function person() {
  return makeAutoObservable({
    value: {
      name: 'zh',
      age: 20
    },

    updateName() {
      this.value.name = 'llm'
    },

    updateAge() {
      this.value.age = 23
    }
  })
}

export default person
