const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("No credentials");
});

app.get("/api/people", (req, res) => {     
  res.status(200).json({ success: true, data: people });    
});

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'no credentials'})
    }
    res.status(201).json({success:true,person:name}) 
}) 

app.post('/api/people/postman', (req, res)=>{     // if we run this file, then enter localhost:5000/api/people/postman in URL bar in thunder client, select POST as method, and in headers tab, add content-type as application/json , and in body tab, add {"name":"friday"}, then click send, then an object would appear in response , having data as array, and there would be friday at below in that array.
  const {name} = req.body
  if(!name){
      return res.status(400).json({success:false, msg:'no credentials'})
  }
  res.status(201).json({success:true,data:[...people, name]})
})

app.put('/api/people/:id', (req, res)=>{   // put is used for updating an already existing data. // if we run this file, then enter localhost:5000/api/people/2 (here 2 in url, we can also write 3 or 5 or 6,etc if it is more than 5, then it would not match with any id) in URL bar in thunder client, select PUT as method, and in headers tab, add content-type as application/json , and in body tab, add {"name":"friday"}, then click send, then an object would appear in response , having data as array, and there would be friday as name , where id is 2. 
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find((person)=> person.id === Number(id))

  if(!person) {
    return res.status(404).json({success:false, msg:`no person with id ${id}`})    // Here status is 404
  }
  const newPeople = people.map((person) => {
    if(person.id === Number(id)){
      person.name = name;
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople})
})             

app.delete('/api/people/:id', (req, res)=>{     // in thunder client, we donot have to give body. we will give url localhost:5000/api/people/4 then in response 4th person will be deleted. but if we write 2 in place of 4, then 2nd person will not appear, but 4th person will appear again. Hence if we delete any person, then other deleted person will appear again. but in PUT method, if we update person name of id 2, then update person name of id 4, then previously updated person name will remain. In delete , we are not persisting data.
  const person = people.find((person)=> person.id === Number(req.params.id)) // Here shortcut is used and destructuring is not used for id (as was done in above PUT method code).

  if(!person) {
    return res.status(404).json({success:false, msg:`no person with id ${req.params.id}`})    // Here status is 404
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  return res.status(200).json({success:true, data:newPeople})
})



app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});