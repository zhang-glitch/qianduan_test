import { defineStore } from 'pinia'
import axios from 'axios'

const useUserStore = defineStore('user', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      name: 'zh',
      age: 20,
      friends: [],
      song: {},
      discount: 0.6,
      books: [
        { name: '深入Vuejs', price: 200, count: 3 },
        { name: '深入Webpack', price: 240, count: 5 },
        { name: '深入React', price: 130, count: 1 },
        { name: '深入Node', price: 220, count: 2 }
      ]
    }
  },
  getters: {
    currentDiscount(): number {
      return this.discount * 0.9
    },
    totalPrice(state) {
      let _totalPrice = 0
      for (const book of state.books) {
        _totalPrice += book.count * book.price
      }
      return _totalPrice * this.currentDiscount
    },
    totalPriceCountGreaterN(state) {
      return function (n: number) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice * this.currentDiscount
      }
    }
  },
  actions: {
    changeState() {
      this.name = 'llm'
      this.age = 30
      this.friends.push('zj', 'llm')
    },
    // 更新数据
    getSong() {
      axios({
        url: 'http://123.207.32.32:9001/song/detail?ids=1441758494'
      }).then((res) => {
        console.log('res', res.data.songs[0])
      })
    }
  }
})

export default useUserStore
