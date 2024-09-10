const x = 10;
if (true) {
  const x = 20; // declares a new x
}
console.log(x); // outputs 10
//x = 30; // TypeError: Assignment to constant variable.

