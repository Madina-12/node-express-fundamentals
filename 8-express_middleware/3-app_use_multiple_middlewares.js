const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// app.use([logger, authorize])        // To use multiple middlewares, we place them in an array. They will be executed in the order. logger will be executed first.
// app.use('/api',[logger, authorize])      // We can also give path.

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.get('/api', (req,res)=>{
    res.send('API Page')
})

app.get('/api/products',[logger, authorize],(req, res)=>{       // We can also pass multiple middlewares  for a route. If we write  localhost:5000/api/products?user=brother    only then   API Products would be shown in browser. if we write localhost:5000/api/products     then unauthorized would be shown.
    console.log(req.user);
    res.send('API Products')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000.....');
})