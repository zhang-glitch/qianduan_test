import React from 'react'

import useStore from './context'

export default function ContextTest() {
  const value = useStore()
  return <p>{value}</p>
}
