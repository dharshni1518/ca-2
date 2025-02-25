const mongoose = require("mongoose");

const restaurantSchema = new restaurant.Schema({
    name:{type:String, required:true},
    Location:{type:String, required:true}
});

const Restaurants = mongoose.model("Restaurants",bookSchema);
module.export = Restaurants; 