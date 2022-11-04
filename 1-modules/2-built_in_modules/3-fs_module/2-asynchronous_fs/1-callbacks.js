const {readFile, writeFile} = require('fs')
readFile('./read_File_1.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    // console.log(result);
    const first = result;
    readFile('./read_File_2.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './newFile.txt',
            `Text in first file is ${first} and Text in second file is ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})