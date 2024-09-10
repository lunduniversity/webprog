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
