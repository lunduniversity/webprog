function Person(name) {
  this.age = 0;
  this.name = name;
}
Person.birthday = function () {
  this.age++;
}

// function syntax
function Cat(name) {
  return Person.call(this, name);
}
Cat.prototype = Object.create(Person.prototype);
Cat.prototype.birthday = function () { this.age += 7; };

// class syntax

class Cat2 extends Person {
  constructor(name) {
    super(name);
  }
  birthday() { this.age += 7; }
}

const myCat = new Cat2('Per');
myCat.birthday();
console.log(`${myCat.name} is ${myCat.age} years old.`);

