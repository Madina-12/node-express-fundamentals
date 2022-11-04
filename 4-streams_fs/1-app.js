// Streams are used to read and write data sequentially.
// 4 different types of streams
// writable     used to write data sequentially
// readable     used to read data sequentially
// duplex       used to both read and write data sequentially
// transform    data can be modified while writing and reading

// While reading or writing file (synchronously or asynchronously) we set it equal to a variable.
// if size of file is too big, then it may cause problems.

// const { writeFileSync } = require('fs')
// for (let i = 0; i<100000; i++){
// writeFileSync('./longFile.txt', `salam ${i}\n`, { flag: 'a'})
// }

// Above code is used to write longFile.

const {createReadStream} = require('fs')

const stream = createReadStream('./longFile.txt')

stream.on('data', (result)=>{       // Here event is listened.
    console.log(result);
})

stream.on('error', (err)=>{         // If we pass wrong path, then error would be shown in terminal.
    console.log(err)
})

// The result of above code would be in buffers in terminal.
// By default size of buffer is 64kb
// last buffer would be remainder
// highWaterMark is used to control size of buffer
// const stream = createReadStream('./longFile.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./longFile.txt', { encoding: 'utf-8' })
// const stream = createReadStream('./longFile.txt', { highWaterMark: 90000, encoding: 'utf-8' })



