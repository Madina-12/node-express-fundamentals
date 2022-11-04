// same_functionality_as_in___2_using_thunder_client___but_used_routes_here

const express = require("express");
const app = express();
// const { people } = require("./data");   // This was written in previous basics but here it is commented out and written in people.js
const people = require('./routes/people')
const login = require('./routes/login')


// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json())
// static assets
app.use(express.static('../1_get_post_with_frontend_without_postman/methods-public')) // Here we have used methods-public app. because we can see that login works or not. if we go to localhost:5000 in browser, then enter  bhai  in input bar. then welcome bhai   will show, it means that login is working.


app.use('/api/people', people)    // people is declared above. here it is written that when url would start with /api/people/ , then use people (which is people.js in routes folder , as declared above)
app.use('/login', login)


app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

// Now 1_app.js is looking cleaner. but people.js is not looking much cleaner.