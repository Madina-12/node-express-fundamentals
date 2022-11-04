const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log('User hit the resource');
    res.status(200).send('Home Page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('<h1>About Page</h1>')
})

app.all('*',(req, res)=>{
    res.status(404).send('<h1>Resource not found...</h1>') 
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000....');
})

// app.get
// app.post
// app.put
// app.delete
// app.all      .all    works with all of the above 4 methods. if 404 error comes with any of the above methods, then what should be done.
// app.use      .use    it is responsible for middleware
// app.listen
