require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Restaurants = require("./restaurantSchema");
const Menus = require("./menuSchema");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("Database Connected"));
  
  


app.post("/Menus",async(req,res)=>{
    try{
        const newMenus = new Menus(req.body);
        await Menus.save();
        res.status(201).json({message:"Menu add successfully",menu: newMenus});
    }catch(error){
        res.status(400).json({message:"Error in saving menu",error});
    }
});
app.get("/Menus",async(req,res)=>{
    try{
        const Menus = await Menus.find();
        res.json(Menus);
    }catch(error){
        res.status(500).json({message:"Error in fetchinf menu",error});
    }
});

app.listen(3000,()=>console.log("server is running on http://localhost:3000"))