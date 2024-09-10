

var x = 10;
if (true) {
var x = 20; // redeclares x
}
console.log(x); // outputs 20
//var is function-scoped and can be redeclared and updated