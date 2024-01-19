const fs = require('fs');

// stream is more suitable for frequently operations or large file io
const ws = fs.createWriteStream('./lemon.txt');

ws.write('夢らなばどれほどよかったでしょう、');
ws.write('未だにあなたのことを夢に見る。');
ws.write('忘れたものを取りに帰るように、');


// could not to explicitly close and stream will auto close
ws.close();

// const rs = fs.createReadStream('./lemon.txt');
const rs = fs.createReadStream('./assets/乙女ゲー世界はモブに厳しい世界です_三嶋与夢_z_lib_org.txt');

rs.on(
    'data',
    chunk => {
        console.log(chunk.toString());
        // console.log(chunk.length);
    }
)

// optional method
rs.on(
    'end',
    () => {
        console.log('read end');

    }
)

// simple copy file

function copy(src, dest) {
    let rs = fs.createReadStream(src);
    let ws = fs.createWriteStream(dest);
    // method 1, less mem usage
    // rs.on(
    //     'data',
    //     chunk => {
    //         ws.write(chunk);
    //     }
    // )
    // method 2, more mem usage but more simple
    rs.pipe(ws);
    rs.on(
        'end',
        () => {
            console.log('memory usage: ', process.memoryUsage().rss / 1024 ** 2, 'MB');
            ws.close();
        }
    )
}

copy(
    './assets/乙女ゲー世界はモブに厳しい世界です_三嶋与夢_z_lib_org.txt',
    './assets/乙女ゲー世界はモブに厳しい世界です_三嶋与夢_z_lib_org_copy.txt'
)