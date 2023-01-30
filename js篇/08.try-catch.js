function foo() {
  try {
    throw '11'
  } catch (err) {
    return '222'
  } finally {
    console.log('finally========')
  }
}

console.log(foo())


