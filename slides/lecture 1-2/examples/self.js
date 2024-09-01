

function Person() {
  var self = this;
  this.age = 0;
  this.growUp = function () {
    self.age++;
    console.log('this.age is: ' + this.age);
    console.log('self.age is: ' + self.age);
  };
}
let per = new Person();
let i = setInterval(per.growUp, 1000);
