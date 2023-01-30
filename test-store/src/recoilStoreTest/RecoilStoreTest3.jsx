import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
})
const todoListState = atom({
  key: 'todoListState',
  default: []
})

// 过滤
// const filteredTodoListState = selector({
//   key: 'filteredTodoListState',
//   get: ({ get }) => {
//     const filter = get(todoListFilterState)
//     const list = get(todoListState)

//     switch (filter) {
//       case 'Show Completed':
//         return list.filter((item) => item.isComplete)
//       case 'Show Uncompleted':
//         return list.filter((item) => !item.isComplete)
//       default:
//         return list
//     }
//   }
// })

// 提供一些更广的计算数据
const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    }
  }
})

export default function RecoilStoreTest3() {
  // changed from todoListState to filteredTodoListState
  // const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      {/* <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))} */}
    </>
  )
}

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({ target: { value } }) => {
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}
