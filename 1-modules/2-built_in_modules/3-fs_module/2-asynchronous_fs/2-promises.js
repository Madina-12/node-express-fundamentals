const {readFile} = require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result)
            }
        })
    })
}

getText('./read_File_1.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))

// We have used promises here.
// Here we have only read one file , if we read 2 files and then write 1 file, then it would also be messy.


// In the below code, we used async await. if we comment out 16,17,18th line, and uncomment the lines below, then code will work.
// const start = async () => {
//         const first = await getText('./read_File_1.txt')
//         const second = await getText('./read_File_2.txt')
//         console.log(first, second)
// }
// start()