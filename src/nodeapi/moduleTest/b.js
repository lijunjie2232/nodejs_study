function tool1() {
    console.log('tool1');
}

function tool2() {
    console.log('tool2');
}

// // expose method for other module
// module.exports = {
//     tool1, tool2
// }

// method2 of expose method entry
exports.t1 = tool1;
exports.t2 = tool2;