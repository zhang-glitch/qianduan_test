console.log(Object.assign({ name: 'zh' }, { age: 20 }))

const o = Object.create(
  { name: 'zh' },
  {
    foo: {
      writable: true,
      configurable: true,
      value: 'hello'
    },
    bar: {
      configurable: false,
      get: function () {
        return 10
      },
      set: function (value) {
        console.log('Setting `o.bar` to', value)
      }
    }
  }
)
console.log(o)
