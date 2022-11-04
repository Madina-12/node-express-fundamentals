const http = require('http')
const {readFileSync} = require('fs')    // We have used synchronous here, because we are not invoking this everytime, someone comes to the server. We only require that file, when we instantiate server.but if we place it in  if statement  then it would be different scenerio. but here we are just requesting it at one. and the second reason is that , it is just an example, hence to make life easy, Sync is used.

const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})          
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})          
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})          
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000)
 