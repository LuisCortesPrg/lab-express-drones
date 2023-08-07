const express = require('express');
const router = express.Router();
const Drone= require("../models/Drone.model.js")
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  
  Drone.find()
  .then((response)=>{
  res.render("drones/list.hbs",{allDrones:response})
  })
.catch((error)=>{
  next(error)
})

  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

res.render("drones/create-form.hbs")


});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create({
    name:req.body.name,
    propellers:req.body.propellers,
    maxSpeed:req.body.maxSpeed
  })
  .then(()=>{
    console.log("dron creado")
    res.redirect("/drones")

  })
  .catch((error)=>{ console.log(error)})
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try{
    const response= await Drone.findById(req.params.id)
  res.render("drones/update-form.hbs",{onedrone:response})}
  catch(error){next(error)}
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const id = req.params.id;
  const {name,propellers,maxSpeed}= req.body 

  Drone.findByIdAndUpdate(id, {
      name:name,
      propellers:propellers,
      maxSpeed:maxSpeed
  })
  .then(()=>{
      res.redirect("/drones")

  })
  .catch((error)=>{
      next(error)
  })

})


router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  
    try {
         await Drone.findByIdAndDelete(req.params.id)
        res.redirect("/drones")
    } catch (error) {
        next(error)
        
    }



});

module.exports = router;
