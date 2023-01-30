import React, { Suspense, useEffect } from 'react'
import {
  atom,
  selector,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable
} from 'recoil'
import axios from 'axios'

const userInfo = atom({
  key: 'userInfo',
  default: {}
})

const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: async () => {
    const result = await axios('http://myjson.dit.upm.es/api/bins/fo6v')
    return result.data
  },
  set: ({ set }, newValue) => set(userInfo, newValue)
})

function AsyncSelector() {
  // const userInfoLoadable = useRecoilValueLoadable(userInfoSelector)
  const [userInfoLoadable, setUserInfo] =
    useRecoilStateLoadable(userInfoSelector)
  if (userInfoLoadable.state === 'hasValue') {
    setUserInfo(userInfoLoadable.contents)
  }

  const userInfos = useRecoilValue(userInfo)
  return (
    <div>
      <p>异步</p>
      <Suspense fallback={<div>loading..</div>}>
        {/* {userInfoLoadable.state === 'hasValue' ? (
          <>
            <p>{userInfoLoadable.contents.name}</p>
            <p>{userInfoLoadable.contents.age}</p>
          </>
        ) : null} */}
        <p>{userInfos.name}</p>
        <p>{userInfos.age}</p>
      </Suspense>
    </div>
  )
}

export default AsyncSelector
