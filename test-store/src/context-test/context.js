import { createContext, useContext } from 'react'

const context = createContext(
  '提供了默认值，并且不需要修改，就不需要通过Context.Provider包裹组件了。'
)

function useStore() {
  return useContext(context)
}
export default useStore
