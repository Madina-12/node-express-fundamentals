const http = require('http')
const fs = require('fs')

http.createServer(function (req, res){
    const fileStream = fs.createReadStream('./longFile.txt', 'utf-8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)   //instead of res.end(text)  fileStream have pipe method. Pipe pushes the readStream into writeStream. so it will write data in chunks. so this is writable stream.
    })
    fileStream.on('error', (err)=>{
        console.log(err)
    })
})
.listen(5000)



// If we run the commented code below, and go to localhost:5000, then in network, click local host, content length would be shown as 1188890 which is 1.18mb but if run above code then     chunked     would appear as transfer encoding.
// const http = require('http')
// const fs = require('fs')

// http.createServer(function (req, res){
//     const text = fs.readFileSync('./longFile.txt', 'utf-8')
//     res.end(text)
// })
// .listen(5000)








