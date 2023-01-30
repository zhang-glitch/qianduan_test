const arr = [{
  name: "算法导论",
  id: 1,
  date: "2006-9",
  price: 85,
  num: 1,
},{
  name: "UNIX编程艺术",
  id: 2,
  date: "2006-2",
  num: 1,
  price: 59
},{
  name: "编程珠玑",
  id: 3,
  date: "2008-10",
  num: 1,
  price: 39
},{
  name: "代码大全",
  id: 4,
  date: "2006-3",
  price: 128,
  num: 1
}]

console.log(arr.reduce((pre,next) => {
  console.log(pre, next)
  return 
}))