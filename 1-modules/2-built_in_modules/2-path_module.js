console.log('1.');
const path = require('path')
console.log(path.sep);
console.log('2.');
const filePath = path.join('/content', 'subfolder', 'file.txt')
console.log(filePath)
console.log('3.');
const basename = path.basename(filePath)
console.log(basename);
console.log('4.');
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

