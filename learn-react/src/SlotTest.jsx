import React from 'react'

// export default function SlotTest(props) {
//   return (
//     <div>
//       <div>slotTest组件中的本身标签</div>
//       {props.children}
//     </div>
//   )
// }

export default function SlotTest(props) {
  return (
    <div>
      <div>slotTest组件中的本身标签</div>
      <div>{props.leftSlot}</div>
      {props.rightSlot}
    </div>
  )
}
