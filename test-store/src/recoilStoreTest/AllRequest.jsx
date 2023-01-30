import React, { Suspense } from 'react'
import {
  atom,
  selector,
  selectorFamily,
  useRecoilStateLoadable,
  useRecoilValue,
  waitForAll
} from 'recoil'
import axios from 'axios'

function myDBQuery(params) {
  return axios('http://myjson.dit.upm.es/api/bins/' + params)
}

const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get: (params) => async () => {
    const response = await myDBQuery(params)
    if (response.error) {
      throw response.error
    }
    return response.data
  }
})
let paramss = ['albj', 'fo6v']
// const friendsInfoQuery = selector({
//   key: 'FriendsInfoQuery',
//   get: async ({ get }) => {
//     const friends = get(waitForAll(paramss.map((item) => userInfoQuery(item))))
//     return friends
//   }
// })

const friendsInfoQuery = selector({
  key: 'FriendsInfoQuery',
  get: async ({ get }) => {
    const friends = waitForAll([
      await axios('http://myjson.dit.upm.es/api/bins/albj'),
      await axios('http://myjson.dit.upm.es/api/bins/fo6v')
    ])
    console.log('======', friends)
    return friends
  }
})

function AllRequest() {
  const value = useRecoilValue(friendsInfoQuery)
  return (
    <div>
      <p>异步</p>
      <Suspense fallback={<div>loading...</div>}>
        {value.map((item) => (
          <div key={item.name}>
            <h1>{item.name}</h1>
            <p>{item.age}</p>
          </div>
        ))}
      </Suspense>
    </div>
  )
}

export default AllRequest
