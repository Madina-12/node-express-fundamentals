// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync
const {readFileSync, writeFileSync, read} = require('fs')

const first = readFileSync('./first.txt', 'utf-8')
const second = readFileSync('./second.txt', 'utf-8')

console.log(first , second);

writeFileSync('./writtenFile.txt',
`Text in first file is ${first} and Text in second file is ${second}`,
{flag: 'a'})




