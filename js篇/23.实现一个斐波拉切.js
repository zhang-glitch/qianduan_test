function fib() {
  let prev = 0
  let nex = 0
  let total = 0
  // let fibArr = [0, 1]; fibArr[i] = fibArr[i - 2] + fibArr[i - 1]; i = 2开始
  return {
    next: () => {
      total = nex + prev
      // //  == 1 ? 0 :  == 1 ? 0 : nex
      prev = nex
      nex = nex == 0 ? 1 : total
      if (prev == 1) {
        return 1
      }
      return total
    }
  }
}

// 通过yeild实现
// let fibArr = [0, 1]; fibArr[i] = fibArr[i - 2] + fibArr[i - 1]; i = 2开始
function* fib() {
  let fibArr = [0, 1]
  let i = 0
  while (true) {
    fibArr[i + 2] = fibArr[i] + fibArr[i + 1]
    yield fibArr[i]
    i++
  }
}

let a = fib()

console.log(a.next()) //0
console.log(a.next()) //1
console.log(a.next()) //1
console.log(a.next()) //2
console.log(a.next()) //3
console.log(a.next()) //5
console.log(a.next()) //8
console.log(a.next()) //13

// function* fib() {
//   var current = (a = b = 1)

//   yield 1

//   while (true) {
//     current = b

//     yield current

//     b = a + b
//     a = current
//   }
// }

// a = fib()

// var i;
// var fib = [0, 1]; // Initialize array!

// for (i = 2; i <= 10; i++) {
//   // Next fibonacci number = previous + one before previous
//   // Translated to JavaScript:
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }
