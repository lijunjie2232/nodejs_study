// store number form string
let buf1 = Buffer.from([104, 101, 108, 108, 111, 32, 110, 111, 100, 101, 106, 115]);
console.log(buf1.toString());

// get piece of string
console.log(buf1[0].toString(2));

// modify buffer item
buf1[1] -= 10;

console.log(buf1.toString());

// max value of each buffer is 255
try {
    buf1[0] = 255;
    console.log(buf1);
    buf1[0] = 512; // 0
    console.log(buf1);
} catch (error) {
    console.log(error);
}

// if kanji appears in buffer, each character takes 3 bits
try {
    let buf2 = Buffer.from('今日は');
    console.log(buf2);
    console.log(buf2.toString());
} catch (error) {
    console.log(error);
}
