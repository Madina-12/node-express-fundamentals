const express = require("express");
const app = express();
const people = require('./routes/people')
// const login = require('./routes/login')


// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json())
// static assets
app.use(express.static('../1_get_post_with_frontend_without_postman/methods-public')) 

app.use('/api/people', people)    
// app.use('/login', login)


app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
