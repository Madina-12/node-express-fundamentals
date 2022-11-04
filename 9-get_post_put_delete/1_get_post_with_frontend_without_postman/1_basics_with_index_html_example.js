const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.static('./methods-public'))   // method-public is a folder in which static files are present. including index.html
// in index.html , there is form tag. where method is provided as 'POST' , So when we go to localhost:5000, we enter   bhai     below  Enter name, then press submit, then in network tab, press login, go to payload, there would be  name:bhai   , Here key is name. because in index.html, in input tag, name="name" is written. if we write name="typing"  then in payload tab, typing:bhai would appear. 
app.use(express.urlencoded({ extended: false }))    // It is for getting form data. urlencoded is a middleware. we can see documentation of express at https://expressjs.com/en/api.html#express.urlencoded . it will parse form data and add values to req.body. in app.post('/login'!!!) below, there is console.log(req.body) , when we go to localhost:5000 , and in input bar, write   bhai    then in console     {name:'bhai'} would appear.  writing the flag extended:false is common approach.
app.get('/api/people', (req, res)=>{
    res.status(200).json({ success:true, data:people})
})

app.post('/login', (req, res)=>{
    console.log(req.body);
    const {name} = req.body;    // Getting value of name from req.body object
    if(name){       // If we enter bhai in input, and submit ,then Welcome bhai , would appear. and if submitted empty, then    No credentials  would appear. 
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('No credentials')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....');
})

// In index.html , in form, action is equal to "/login" , here full path is not given, only /login is written. because it is on same server. but if frontend and backend are separate and on different servers, then full path of that server would be given. (full domain)

// in request headers, in network tab, content-type is application/x-www-form-urlencoded