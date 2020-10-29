var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:{type:String,required:true,unique:true},
    password: {type:String,required:true}
});

var user = mongoose.model("user",userSchema,"user");

module.exports = user;