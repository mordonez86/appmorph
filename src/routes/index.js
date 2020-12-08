const express = require('express');
const task = require('../model/task');
const router = express.Router();


router.get('/api', async (req, res) => {  
 switch(req.body.topic){
   case "items":
     res.send("es un item")
     break;
   case "shippings":
     res.send("es un envio")
     break;  
   case "orders":
     res.send("es un orden")
     break;    
 }
  
});




module.exports = router;
