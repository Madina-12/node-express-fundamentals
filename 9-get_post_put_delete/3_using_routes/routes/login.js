const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send("No credentials");
  });
  
  module.exports = router;  // We have to export it in this way.