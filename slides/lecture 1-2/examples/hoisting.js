/**
 * Name Hoisting
 */
function foo() {
  console.log('x: ' + x); // undefined 
  var x = 3;
  console.log('x: ' + x); // 3
}
foo();

hoistedFun = _ => 'function declared by assignment';
function hoistedFun() {
  return 'function declaration';
}
console.log(hoistedFun());