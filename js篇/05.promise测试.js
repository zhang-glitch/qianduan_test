const p = new Promise((res, rej) => {
  throw new Error('=========')
})

p.then((res) => {
  throw new Error('+++++++++')
})
  .catch((err) => {
    console.log('err', err) // 只会处理第一错误
    throw new Error('-------------')
  })
  .catch((err) => {
    // console.log('err====', err) // 只会捕获catch中的错误。
    throw new Error('0000000000')
  })
  .then((res) => {
    throw new Error('11111111111111')
  })
  .catch((err) => {
    console.log(err) // 只会捕获最近的catch中的错误
  })
