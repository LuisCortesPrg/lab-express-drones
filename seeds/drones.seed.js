// Iteration #1

const mongoose= require("mongoose")
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];
 
  const Drone= require("../models/Drone.model.js")
  mongoose.connect("mongodb://127.0.0.1:27017/lab-express-drones")
.then(()=>{
return Drone.create(drones)
.then(()=>{
    console.log("conectados")
})
})
.catch((error)=>{
console.log(error)
})
  