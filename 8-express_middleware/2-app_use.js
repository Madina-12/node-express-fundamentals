// We may want to place middlewares (logger,etc) in separate file. So this file may look clean.
// And if we want to use logger in all routes(may be 30 or 100). then, Is there a shortcut? or we have to write logger manually for all routes.
// See its documentation here   https://expressjs.com/en/api.html#app.use
const express = require('express')
const app = express()
const logger = require('./logger')      // We have imported logger here.

// app.use(logger)     // If we pass this, then logger will be applied for all routes. And if we pass it after some routes, then logger will be applied only for routes which are below it. so if we pass it below Home page route, then it will not applied for Home page route.
// app.use('/api', logger)      // Path is provided here. It will apply logger only to routes which are after  /api hence it will be applied only to     /api  &  /api/products  &  /api/products/apple
app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/api', (req, res)=>{
    res.send('Api')
})

app.get('/api/products', (req, res)=>{
    res.send('Api Products')
})

app.get('/api/products/apple', (req, res)=>{
    res.send('Api Products Apple')
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....');
})


// We can use middlewares in three ways.
// 1- on our own ---> We can use middlewares on our own.
// 2- express ---> express has some built in middlewares. As we studied     app.use(express.static('./public'))     here static is built in middleware.
// 3- 3rd Party Middleware ---> We can use morgan npm   which is popular. install it by     npm i morgan    and we can see its docs