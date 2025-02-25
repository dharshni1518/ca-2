const mongoose  = require("mongoose");

const menuSchema = new menu.Schema({
    dishName:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    }
});
const Menus = mongoose.model("Menus",bookSchema);
module.export = Menus; 