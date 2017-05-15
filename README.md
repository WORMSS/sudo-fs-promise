# sudo-fs-promise

Simple promise wrapper for (@mh-cbon/sudo-fs)[https://npmjs.org/package/@mh-cbon/sudo-fs] . Currently 1.0.17.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install sudo-fs-promise --save
```

## Example

```js
var fs = require("sudo-fs-promise");
var fPath = "./someFile";

fs.readFile("./someFile")
.then(data => { console.log("data:", data); })
.catch(err => { console.log("err:", err); });

```

## API

```js
fs.createReadStream(fPath) .then(...)
fs.createWriteStream(fPath) .then(...)
fs.readFile(fPath, options) .then(...)
fs.writeFile(fPath, content, options) .then(...)
fs.touch(fPath, options) .then(...)
fs.unlink(fPath) .then(...)
fs.rmdir(fPath) .then(...)
fs.mkdir(fPath, mod) .then(...)
fs.chown(fPath, uid, gid) .then(...)
fs.chmod(fPath, mod) .then(...)
fs.exists(fPath) .then(...)
```

## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/sudo-fs-promise.svg
[npm-url]: https://npmjs.org/package/sudo-fs-promise 
[downloads-image]: https://img.shields.io/npm/dm/sudo-fs-promise.svg
[downloads-url]: https://npmjs.org/package/sudo-fs-promise
