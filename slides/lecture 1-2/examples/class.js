class Person {
  static #privateCount = 0;
  static count = 0;
  constructor(name, age) {
    this.name = name || "Anonymous";
    this.age = age || 0;
    Person.count = Person.count + 1;
    Person.#privateCount++;
  }
  birthday() {
    this.age++;
  }
  static getCount() {
    return Person.#privateCount;
  }
}
per = new Person('per', 3);
console.log("pers own properties: " + Object.getOwnPropertyNames(per));
console.log("Person.prototypes own properties: " + Object.getOwnPropertyNames(Person.prototype));
console.log("Person own properties: " + Object.getOwnPropertyNames(Person));


console.log("#privateCount " + Person.getCount());
console.log("Person.count " + Person.count);
