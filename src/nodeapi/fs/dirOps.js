const fs = require('fs');

// create new dir
fs.mkdir('./test_dir', err => {
    console.log(err ? err : 'mkdir successful');
})

fs.mkdir('./test_dir/a/b/c', { recursive: true }, err => {
    console.log(err ? err : 'mkdir -p successful');

})

// ls dir
fs.readdir('./', (err, files) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(files);
        for (let f of files) console.log(f);
        return files;
    }
})

// delete dir
// fs.rmdir('./test_dir', { recursive: true }, err => {
//     console.log(err ? err : 'rm dir successful');
// });

fs.rm('./test_dir', { recursive: true }, err => {
    console.log(err ? err : 'rm successful');

})