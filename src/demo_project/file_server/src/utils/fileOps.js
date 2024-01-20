const fs = require('fs');
const path = require('path');

function fileProperties(dirPath, fileName) {
    var fileStat = {};
    if (fileName == null) {
        fileName = path.basename(dirPath);
        dirPath = path.dirname(dirPath);
    }
    fs.stat(
        path.join(dirPath, fileName),
        (err, stat) => {
            if (err) console.log(err);
            else fileStat = {
                atime: stat.atime,
                blksize: stat.blksize,
                birthtime: stat.birthtime,
                isDirectory: stat.isDirectory(),
                filename: fileName,
                dirpath: dirPath,
            }
        }
    );
    return fileStat;
}

function lsDir(dirPath) {
    fs.readdir('./', (err, files) => {
        if (err) {
            console.log(err);
        } else {
            let dirFiles = [];
            for (let f of files)
                dirFiles.push(fileProperties(dirPath, f))
            return dirFiles;
        }
    })
}

// function getFile(filePath) {
//     rs = fs.createReadStream(filepath);
//     rs.on(
//         'data',
//         chunk => {

//         }
//     )
// }

function staticProv(filepath, resp) {
    try {
        let filep = path.join(
            __dirname,
            '../..',
            'static',
            filepath
        )
        if (!fs.existsSync(filep)) {
            resp.end('404 Not Found')
            return;
        };
        if (filep.endsWith('.html'))
            resp.setHeader('Content-Type', 'text/html; charset=utf-8');
        else if (filep.endsWith('.html'))
            resp.setHeader('Content-Type', 'application/javascript');
        else if (filep.endsWith('.css'))
            resp.setHeader('Content-Type', 'text/css; charset=utf-8');

        const rs = fs.createReadStream(filep);
        rs.pipe(resp);

    } catch (exception) {
        return resp.end('504 Server Error');
    }
}

function fsapi(path, resp) {
    resp.end(
        JSON.stringify({
            data: [
                { filename: 'weights', modify: 'Thu Jan 18 2024 17:11:31', isdir: true },
                { filename: 'train.log', modify: 'Thu Jan 18 2024 17:15:35', isdir: false }
            ]
        })
    )
}

module.exports = { staticProv, fsapi }