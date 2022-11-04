const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
    res.json([{ name: 'bhai'}, {name: 'brother'}])      // res.json  converts object, array, string, Boolean, number, or null       into JSON string using JSON.stringify . It sends the response with correct content-type. 
})

app.get('/about', (req, res)=>{
    res.json(products)
})
 
app.listen(5000, ()=>{
    console.log('Server is listning on port 5000....')
})
