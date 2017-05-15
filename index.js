const fs = require("@mh-cbon/sudo-fs");

function readFile(fPath, options) {
    return new Promise((resolve, reject) => fs.readFile(fPath, options, cb(resolve, reject)));
}

function writeFile(fPath, content, options) {
    return new Promise((resolve, reject) => fs.writeFile(fPath, content, options, cb(resolve, reject)));
}

function touch(fPath, options) {
    return new Promise((resolve, reject) => fs.touch(fPath, options, cb(resolve, reject)));
}

function unlink(fPath) {
    return new Promise((resolve, reject) => fs.unlink(fPath, cb(resolve, reject)));
}

function rmdir(fPath) {
    return new Promise((resolve, reject) => fs.rmdir(fPath, cb(resolve, reject)));
}

function mkdir(fPath, mod) {
    return new Promise((resolve, reject) => fs.mkdir(fPath, mod, cb(resolve, reject)));
}

function chown(fPath, uid, gid) {
    return new Promise((resolve, reject) => fs.chown(fPath, uid, gid, cb(resolve, reject)));
}

function chmod(fPath, mod) {
    return new Promise((resolve, reject) => fs.chmod(fPath, mod, cb(resolve, reject)));
}

function exists(fPath) {
    return new Promise((resolve, reject) => fs.exists(fPath, cb(resolve, reject)));
}

function cb(resolve, reject) {
    return (err, data) => err ? reject(err) : resolve(data);
}

module.exports = {
    createReadStream: fs.createReadStream,
    createWriteStream: fs.createWriteStream,
    readFile,
    writeFile,
    touch,
    unlink,
    rmdir,
    mkdir,
    chown,
    chmod,
    exists
};