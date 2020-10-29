var mongoose = require("mongoose");

var sanphamSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    category:String,
    description: String,
    price: Number,
    sale: Number,
    image: String
});

var sanpham = mongoose.model("sanpham",sanphamSchema,"sanpham");

module.exports = sanpham;