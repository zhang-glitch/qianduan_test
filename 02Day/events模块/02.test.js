undefined = true;

(function (undefined) {
  var a;
  if (a === undefined) {
    console.log("----------")
  }
})()


foo() //foo is not a function

var a = true;
if (a) {
  function foo () {
    console.log("a")
  }
} else {
  function foo () {
    console.log("b")
  }
}