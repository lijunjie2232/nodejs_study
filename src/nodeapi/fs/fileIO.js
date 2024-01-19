const { SlowBuffer } = require('buffer');
const fs = require('fs');

// write into file, it will over write exits content
fs.writeFile('./lemon.txt', '夢らなばどれほどよかったでしょう、', err => {
    console.log(err ? err : 'successfully writes file');
})

// writeFile is a async method, so this output is earlier than writeFIle recall func
console.log('writing');

// write into file, it will over write exits content
// fs.writeFileSync('./lemon.txt', '夢らなばどれほどよかったでしょう', err =>{
//     console.log(err?err:'successfully writes file in sync mode');
// })
// console.log('syncにwriting');

// append content to file
fs.appendFile('./lemon.txt', '未だにあなたのことを夢に見る。', err => {
    console.log(err ? err : 'successfully append file');
});

fs.writeFile('./lemon.txt', '忘れたものを取りに帰るように、', { flag: 'a' }, err => {
    console.log(err ? err : 'successfully append file');
});


// read file normal mathod
fs.readFile('./lemon.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data.toString());
    }
})

fs.readFile('./assets/乙女ゲー世界はモブに厳しい世界です_三嶋与夢_z_lib_org.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        // console.log(data.toString());
        console.log(data.length);

    }
})

// file rename or move
fs.rename('lemon.txt', 'lemon.log', err => {
    console.log(err ? err : 'rename successful');
})
fs.rename('lemon.log', './assets/lemon.txt', err => {
    console.log(err ? err : 'rename successful');
})

// delete file

// fs.unlink(
//     './assets/lemon.txt',
//     err => {
//         console.log(err ? err : 'delete successful');

//     }
// )

fs.rm(
    './assets/lemon.txt',
    err => {
        console.log(err ? err : 'delete successful');

    }
)