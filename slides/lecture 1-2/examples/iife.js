 // outer scope
var x = 2; 
(function() {
  // inner hidden scope
  var x = 3;
  console.log('inner scope: ' + x);
})();
console.log('outer scope: ' + x);
// more outer scope