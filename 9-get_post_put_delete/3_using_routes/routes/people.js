// Here express is imported and router is declared as express.Router() and   router   is written at all places where    app     was written.
// And where url was provided as /api/people, there /api/people is converted to forward slash /     . because in 1_app.js file , app.use('/api/people', people) is given. 
const express = require('express')
const router = express.Router()
const { people } = require("../data");

router.get("/", (req, res) => {     
    res.status(200).json({ success: true, data: people });    
  });
  
router.post('/', (req, res)=>{
      const {name} = req.body
      if(!name){
          return res.status(400).json({success:false, msg:'no credentials'})
      }
      res.status(201).json({success:true,person:name}) 
  }) 
  
router.post('/postman', (req, res)=>{     
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'no credentials'})
    }
    res.status(201).json({success:true,data:[...people, name]})
  })
  
router.put('/:id', (req, res)=>{   
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=> person.id === Number(id))
  
    if(!person) {
      return res.status(404).json({success:false, msg:`no person with id ${id}`})    
    }
    const newPeople = people.map((person) => {
      if(person.id === Number(id)){
        person.name = name;
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople})
  })             
  
router.delete('/:id', (req, res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id)) 
  
    if(!person) {
      return res.status(404).json({success:false, msg:`no person with id ${req.params.id}`})    
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
  })


module.exports = router;  // We have to export it in this way.