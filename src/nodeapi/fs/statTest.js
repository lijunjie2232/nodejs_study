const fs = require('fs');

// stat method
fs.stat('./assets', (err, stat) => {
    console.log(err ? err : stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
})

/** stat full info
atime: Thu Jan 18 2024 17:15:35 GMT+0800 (中国標準時)
atimeMs: 1705569335545.819
birthtime: Thu Jan 18 2024 16:42:12 GMT+0800 (中国標準時)
birthtimeMs: 1705567332971.735
blksize: 4096
blocks: 0
ctime: Thu Jan 18 2024 17:15:35 GMT+0800 (中国標準時)
ctimeMs: 1705569335545.819
dev: 2585253920
gid: 0
ino: 562949955963058
mode: 16822
 */