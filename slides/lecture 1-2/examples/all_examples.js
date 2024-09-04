/**
 * Dynamiska typer och typeof
 */
const a = 3;  // a is associated with (3, number)
let b = 4;  // (4, number)
console.log('typeof a: ' + typeof a); // number
console.log('typeof b: ' + typeof a); // number
//a = 'Per'; // Uncaught TypeError TypeError: Assignment to constant variable.
b = 'Per';  // ('Per', string)
console.log('typeof b: ' + typeof b); // string

console.log('typeof new Object(): ' + typeof new Object);
console.log('typeof null: ' + typeof null);
class MyClass { }
console.log('typeof MyClass: ' + typeof MyClass);

function foo() { return null; };
console.log('typeof foo: ' + typeof foo);
console.log('typeof "str": ' + typeof "str");
console.log('typeof new String("str"): ' + typeof new String("str"));
/**
 * String
 */

/**
 * Type coercion
 */
function add(a, b) { return a + b; }
let v = add(1, 3);
console.log('add(1, 3): ' + v);

v = add(1, "3");
console.log('add(1, "3"): ' + v);
console.log('1 + 2: ' + 1 + 2);

function add(a, b) { return (+a) + (+b); } // enforce type conversion to number
v = add(1, "3");
console.log('add(1, "3"): ' + v);
v = add(1, "Per");
console.log('add(1, "Per"): ' + v);

// explicit type conversion, exists for all types
console.log('typeof Number("3") ' + typeof Number("3"));
// short version for boolean
console.log('typeof !!"foo" ' + typeof !!"foo");

/**
 * Truthy/Falsy
 * falsy: false, 0, 0n, "",’’,‘‘, null, undefined, NaN
 * no need for
 * if (name === null || name.length === 0){ name = ’anonymous’; }
 */

/**
 * Short Circuit, Optional Chaining operator
 */

console.log('"Per" || "default": ' + ("Per" || "default"));
console.log('null || "default": ' + (null || "default"));
console.log('null && "default": ' + (null && "default"));
const obj = { b: { c: null } };
//a.b.c.d; // Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'c')
console.log('a?.b?.c?.d: ' + (a?.b?.c?.d));
console.log('null?.()): ' + (null?.()));
console.log('null?.[0]): ' + (null?.[0]));

/**
 * Equality and sameness
 */
v = 1 == '1';
console.log('1 == "1": ' + v);
v = [1, 2] == "1, 2";
console.log('[1, 2] == "1, 2": ' + v);
v = [1, 2] == "1, 2";
console.log('[1,2] == "1, 2": ' + v);

v = 1 === '1';
console.log('1 === "1": ' + v);

/**
 * Functions
 */

function add(a, b) {
  return a + b;
}
v = add(2, 4);
console.log('add(2, 4): ' + v);
add = 3;
// v = add(2, 4); // Uncaught TypeError TypeError: add is not a function
add = function (a, b) { a + b }
v = add(2, 4);
console.log('add(2, 4): ' + v); // undefined, fortgot to return the sum

add = function (a, b) { return a + b; };
v = add(2, 4);

fib = function f(n) { return n > 1 ? (f(n - 1) + f(n - 2)) : 1 };
v = fib(4);
console.log('fib(4): ' + v);

/**
 * Arrow Function
 */
add = (a, b) => a + b;
v = add(2, 4);
console.log('add(2, 4): ' + v);
add = (a, b) => { return a + b; }; // {} meke the body a statement, return is needed
v = add(2, 4);
console.log('add(2, 4): ' + v);

inc = n => n + 1;
v = inc(2);
console.log('inc(2): ' + v);

/**
 * Higher order functions
 */
let list = [1, 2, 3, 4, 5];
selection = list.filter((x) => x % 2 === 0);
b = selection.map(x => x + 2);
b.forEach(console.log);
let c = b.reduce((sum, x) => sum + x, 0);

// chaining
v = list.filter((x) => x % 2 === 0)
  .map(x => x + 2)
  .reduce((sum, x) => sum + x, 0);

// closure
function bar() {
  let cnt = 0;
  return (_ => cnt++);
}

let idGenerator = bar();
let id = idGenerator();
console.log('id: ' + id);

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

/**
 * Objects
 */
const familyName = 'Andersson';
const myObject = {
  givenName: 'Per',
  familyName,
  selector: 'givenName',
  getValue: function () {
    return this[this.selector];
  },
  setValue(value) {
    this[this.selector] = value;
  },
  '+': 'plus'
}
console.log(myObject.getValue());
/**
 * Classes
 */
function Person(name) {
  this.age = 0;
  this.name = name;
}
let per = new Person("Per");
Person.prototype.birtday = function () { this.age++; };
console.log("Pers age: " + per.age)
per.birtday();
console.log("Pers age after a birthday: " + per.age)

/**
 * Class syntax
 */
class Person2 {
  static #count = 0;
  constructor(name, age) {
    this.name = name || "Anonymous";
    this.age = age || 0;
    Person2.#count = Person2.#count + 1;
  }
  birthday() {
    this.age++;
  }
}
per = new Person2('per', 3);
v = Object.getOwnPropertyNames(per);
console.log("pers own properties: " + v);
v = Object.getOwnPropertyNames(Person2.prototype);
console.log("Person2.prototypes own properties: " + v); 
