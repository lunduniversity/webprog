a = [];
function foo() {
  for (var i=0; i<3; i++) {
    (function() {
      var myI = i;  
      a[i] = function() { 
        console.log(myI);
      };
    })();
  }
}
foo();
a[0]();
a[1]();
a[2]();
