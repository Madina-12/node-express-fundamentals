const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }

    res.end(`
    <h1>Oops!</h1>
    <p>Page not found!</p>
    `)       // we also have to end our request.
})

server.listen(5000)


