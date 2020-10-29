const mongoose = require("mongoose");

const hoadonSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  idKhachHang: {type:String,required:true},
  product: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      total: Number,
    },
  ],
  sumPrice: {type:Number,required:true},
  orderDate: {type:Date,required:true},
  deliveryDate: Date,
  receiveDate: Date,
  status:{type:String,required:true},
  nameReceive:{type:String,required:true},
  phoneReceive:{type:String,required:true},
  addressReceive: {type:String,required:true},
  moneyCoupon:Number
});

var hoadon = mongoose.model("hoadon", hoadonSchema, "hoadon");

module.exports = hoadon;
