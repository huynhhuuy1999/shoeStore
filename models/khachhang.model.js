var mongoose = require("mongoose");

var khachhangSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type:String,required:true},
  birthday: Date,
  phone: {type:String},
  address: {type:String,required:true},
  username: {type:String,required:true, unique:true},
  password: {type:String,required:true},
});

var khachhang = mongoose.model("khachhang", khachhangSchema, "khachhang");

module.exports = khachhang;
