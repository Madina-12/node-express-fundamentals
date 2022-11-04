// See request_response.png picture in the same directory.
// Request message is made by users and we are responsible for response message. we will have to setup a proper server. 
// There is a method. get or post or put or delete. if the user wants to get resourse, then there is get request. GET is default request. if he adds a resourse, then there is post request.
// URL are just web addresses.
// We donot have to provide the headers manually. (optional)
// Body is optional. If user just wants the resource, there is no body. but if want to add resource to the server. then we have to provide that data. it's also called payload. 



const http = require('http')
const server = http.createServer((req, res)=>{      // These both are objects.
    console.log('typing');     // Every time, we refresh the browser, typing would shown in the terminal.
    res.end('Home page')    // Response.end must be called on each reponse. This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete.

})
server.listen(5000)         // Here port is 5000, but when we will deploy. there would be specific ports for specific purposes. We can view some of them in     https://ipwithease.com/wp-content/uploads/2020/06/COMMON-TCP-IP-WELL-KNOWN-PORT-NUMBERS-TABLE.jpg
