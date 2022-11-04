const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request server');
    res.end('Hello World')
})

server.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
})

// Here server.listen is written later. but it will run earlier than previous code. and shown in terminal.
// Then when we go to localhost:5000 , then Hello World would be shown. and requrest server would be shown in terminal.