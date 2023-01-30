async function a() {
  try {
    const p = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log('cuwu1')
        throw new Error('ppp')
      }, 1000)
    })
  } catch (error) {
    console.log('====', error)
  }
}

a()
