const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./read_File_1.txt', 'utf-8')
        const second = await readFile('./read_File_2.txt', 'utf-8')  //we have to provide encoding(utf-8) , otherwise we can get the buffer in terminal.
        await writeFile(
            './writtenFile.txt',
            `Text in first file is ${first} and Text in second file is ${second}`,
            { flag: 'a' }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error);
    }
}
start();

// we have used shortcut in above code. we can also use the code below.


// const {readFile} = require('fs')

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {
//         const first = await readFilePromise('./read_File_1.txt', 'utf-8')
//         const second = await readFilePromise('./read_File_2.txt', 'utf-8')  //we have to provide encoding(utf-8) , otherwise we can get the buffer in terminal.
//         await writeFilePromise(
//             './writtenFile.txt',
//             `Text in first file is ${first} and Text in second file is ${second}`
//         )
//         console.log(first, second)
//     } catch (error) {
//         console.log(error);
//     }
// }
// start();