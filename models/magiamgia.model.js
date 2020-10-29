const mongoose = require("mongoose");

const maGiamGiaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code:{type:String, required:true, unique:true}
});

var maGiamGia = mongoose.model("magiamgia",maGiamGiaSchema,"magiamgia");

module.exports = maGiamGia;