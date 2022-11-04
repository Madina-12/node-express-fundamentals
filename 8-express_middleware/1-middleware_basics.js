// Each middleware has access to request and response object.

const express = require('express')
const app = express()

const logger = (req, res, next)=>{      // Logger is a middleware. It has access to request, response (that is whay these are given as parameters.) . next is also given as parameter
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Typing')   // We can write  res.send   and we can also write   next()  . If we donot write both of these. then page will continue to loading. and result will be shown only in console and not in browser. 
    next()      // Donot write both res.send and next(). Write only one of these. If there is res.send('Typing')   then only typing will be shown in browser and     Bhai Friday    will not be shown in browser. And if we write     next()  here, then    Bhai Friday    will be shown in browser. 
}

app.get('/',logger ,(req, res)=>{
    res.send('Bhai Friday')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....');
})