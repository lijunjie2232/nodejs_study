// normal buffer
let buf1 = Buffer.alloc(10);
console.log(buf1);

// unsafe is faster than normal way but ram is not clean
let buf2 = Buffer.allocUnsafe(1000);
console.log(buf2);

// store string into buffer
let buf3 = Buffer.from('hello nodejs');
console.log(buf3);
console.log(buf3.toString());
