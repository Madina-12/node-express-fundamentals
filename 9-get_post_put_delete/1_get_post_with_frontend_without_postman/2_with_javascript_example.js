// Now we will use javascript to send the HTTP request. Instead of form, now we will be sending that requests using javascript. And then content type will be different. We also have form here. but donot have action and method.
// In javascript.html , a package named axios is used. which makes it easier to setup the http requests. so instead of using built in fetch, the axios provides cleaner api and better error messages.

const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.get("/api/people", (req, res) => {     
  res.status(200).json({ success: true, data: people });    // Here data is set as equal to people. in javascript.html, in fetchpeople function, same address  /api/people is written. and their ,by destructuring, value of data, declared here is taken.
});

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'no credentials'})
    }
    res.status(201).json({success:true,person:name}) // Here status code is 201, because we are performing a post request, and we are successful. When we put    bhai    in input bar, then press people in network tab, then in request headers, content type would be application/json. Now, even we are handling form submissions, we are not handling the incoming json data. Hence for this, we will use another middleware. hence we have written app.use(express.json())  here. Ghaliban for login form in index.html , we used urlencoded. and for javascript_html, we have used json middleware. and this will add it to req.body
}) 

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("No credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
