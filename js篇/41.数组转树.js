const arr = [
  { id: 0, content: '1', parentId: 1 },
  { id: 1, content: '2', parentId: 2 },
  { id: 2, content: '3', parentId: 3 },
  { id: 2, content: '4' }
]

const tree = [
  {
    id: 1,
    content: '1',
    children: [{ id: 0, content: '1', parentId: 1 }]
  },
  {
    id: 3,
    content: '4',
    children: [
      {
        id: 2,
        content: '1',
        children: [{ id: 1, content: '2', parentId: 2 }]
      }
    ]
  }
]
