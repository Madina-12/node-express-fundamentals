const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.method);    // By default the method is  GET
    console.log(req.url);   // If in URL bar, we write localhost:5000/contact   then /contact would be the url.
    res.writeHead(200, {'content-type': 'text/html'})          // We provide http headers. (providing metadata about our response) . content-type can be application/json  or  text/plain, etc content type is also called as MIME type or media types.
    // See HTTP response status codes in https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // If we provide 404 instead of 200 in above, then in network tab, 404 (not found) would appear. but at the same time , we are sending back the correct resourse. which would be confusing. because we should provide correct status code.
    res.write('<h1>Home Page</h1>')     // We can also write this html directly in res.end(). this html is our body. 
    res.end()
})

server.listen(5000)
 