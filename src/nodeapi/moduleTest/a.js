const b = require('./b.js');

console.log(b);
// b.tool1();
// b.tool2();
b.t1();
b.t2();

console.log(module.exports == exports);